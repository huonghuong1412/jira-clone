import moment from 'moment';
import Avatar from "../../../components/Avatar/Avatar"
import { User } from "../../Project/Filter"

type CommentItemProps = {
    user: User,
    createdAt: string;
    content: string;
}

type CommentListProps = {
    comments: any[];
}

const Item = ({ user, createdAt, content }: CommentItemProps) => {
    return (
        <div className='mt-[25px] text-[15px] flex items-start text-[#42526e] font-semibold'>
            <Avatar avatarUrl={user.avatarUrl} name={user.name} size={32} />
            <div className="pl-[16px]">
                <div className="inline-block pr-3 pb-[10px]">
                    {user.name}
                </div>
                <div className="inline-block pr-3 pb-[10px]">
                    {moment(createdAt).fromNow()}
                </div>
                <p className="whitespace-pre-wrap">
                    {content}
                </p>
            </div>
        </div>
    )
}

const List = ({ comments }: CommentListProps) => {
    return (
        <div className='w-full relative'>
            {comments && comments.map((comment: any) => <Item key={comment.id} user={comment.user} createdAt={comment.createdAt} content={comment.content} />)}
        </div>
    )
}

export default List