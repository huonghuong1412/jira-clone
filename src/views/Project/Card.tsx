import Avatar from '../../components/Avatar/Avatar';
import DraggableWrapper from '../../components/Dnd/DragableWrapper';
import { IssuePriorityIcon, IssueTypeIcon } from '../../utils/issues';
import { User } from './Filter';
import { IssueDetail, IssueInformation } from './Style';

type CardProps = {
    item: any;
    index: number;
    onClick: any;
    users: User[]
}

const renderIssueType = (type: string) => {
    const TYPE_ICON = IssueTypeIcon[type];
    return <span>{<TYPE_ICON />}</span>
}

const renderIssuePriority = (priority: number) => {
    const PRIORITY_ICON = IssuePriorityIcon[priority];
    return <span>{<PRIORITY_ICON />}</span>
}

const getItemsFromSource = (items: string[], sources: any[]) => {
    return sources.filter((source: any) => items.includes(source.id))
}

const Card = ({ item, users, index, onClick }: CardProps) => {
    const usersInIssue = getItemsFromSource(item.userIds, users);

    return (
        <DraggableWrapper draggableId={item.id} index={index} onClick={onClick}>
            <IssueInformation>
                <p className='text-[14px] pb-3'>{item.title}</p>
                <IssueDetail>
                    <div className='flex items-center justify-center'>
                        <span>{renderIssueType(item.type)}</span>
                        <span>{renderIssuePriority(item.priority)}</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        {
                            usersInIssue.map((user: User, index: number) => (
                                <Avatar key={index} avatarUrl={user.avatarUrl} name={user.name} size={24} />
                            ))
                        }
                    </div>
                </IssueDetail>
            </IssueInformation>
        </DraggableWrapper>
    );
};

export default Card