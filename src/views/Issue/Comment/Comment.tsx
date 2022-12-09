import CommentForm from "./CommentForm"
import List from "./List"

const Comment = ({ comments }: any) => {
    return (
        <div className="pt-[20px]">
            <h3 className="text-[15px] font-semibold">
                Comments
            </h3>
            <CommentForm />
            <List comments={comments} />
        </div>
    )
}

export default Comment