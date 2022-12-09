import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import _ from 'lodash';
import { IssueStatusCopy } from '../../utils/issues';
import Card from './Card';
import { Container, Title } from './Style';
import { useNavigate } from 'react-router-dom';
import DroppableWrapper from '../../components/Dnd/DropableWrapper';

const groupIssuesByStatus = (issues: any[]) => {
    return _.chain(issues).groupBy('status').map((value, key) => ({ status: key, label: IssueStatusCopy[key], items: value })).value();
}

const Board = ({ data, users }: any) => {
    const navigate = useNavigate();
    const [columns, setColumns] = useState(groupIssuesByStatus(data.issues));

    const onDragEnd = (result: any, columns: any, setColumns: any) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns(columns.map((columnItem: any) => columnItem.status === destColumn.status
                ? { ...columnItem, items: destItems }
                : columnItem.status === sourceColumn.status ?
                    { ...columnItem, items: sourceItems } : { ...columnItem }));
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns(columns.map((columnItem: any) => columnItem.status === column.status ? { ...columnItem, items: copiedItems } : { ...columnItem }));
        }
    };

    const redirectToIssue = (id: string) => {
        navigate(`/project/issue/${id}`)
    }

    return (
        <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
            <Container>
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <DroppableWrapper key={columnId} droppableId={columnId} className='min-h-[400px] flex flex-col w-1/4 rounded-[3px] my-0 pb-[30px] mx-[6px] bg-[#F4F5F7]'>
                                <Title>{`${column.label} ${column.items.length || 0}`}</Title>
                                {column.items.map((item: any, index: number) => (
                                    <Card key={index} item={item} users={users} index={index} onClick={() => redirectToIssue(item.id)} />
                                ))}
                        </DroppableWrapper>
                    );
                })}
            </Container>
        </DragDropContext>
    )
}

export default Board