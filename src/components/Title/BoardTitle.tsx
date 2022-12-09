
type BoardTitleProps = {
    title: string;
}

const BoardTitle = ({ title }: BoardTitleProps) => {
    return (
        <div className="mt-[6px] flex justify-between">
            <div className="text-2xl font-[500]">
                {title}
            </div>
        </div>
    )
}

export default BoardTitle