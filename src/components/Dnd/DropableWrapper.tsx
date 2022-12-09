import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

type DroppableWrapperProps = {
    children: JSX.Element | React.ReactNode;
    className?: string;
    droppableId: string;
};

const DroppableWrapper = ({
    children,
    className,
    droppableId,
}: DroppableWrapperProps) => {
    return (
        <Droppable key={droppableId} droppableId={droppableId}>
            {(provided, snapshot) => (
                <div className={classNames(className)} ref={provided.innerRef} {...provided.droppableProps}>
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default  Object.assign(DroppableWrapper);;