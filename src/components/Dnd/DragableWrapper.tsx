import { Draggable } from 'react-beautiful-dnd';

type DraggableWrapperProps = {
    children: React.ReactNode;
    className?: string;
    draggableId: string;
    index: number;
    onClick?: any;
};

const DraggableWrapper = (props: DraggableWrapperProps) => {
    const { index, draggableId, className, children, onClick } = props;
    return (
        <Draggable key={draggableId} draggableId={draggableId} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={className}
                    onClick={onClick}
                >
                    {children}
                </div>
            )}
        </Draggable>
    );
};

export default Object.assign(DraggableWrapper);
