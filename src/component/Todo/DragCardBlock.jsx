import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragCard from "./DragCard";

class DragCardBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }

            this.setState(newState)
            return
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }
        this.setState(newState)
    }

    render() {
        return (
            <div className="">
                <DragDropContext onDropEnd={this.onDragEnd}>
                    <Droppable droppableId={this.props.title}>
                        {/* // droppableId: 該 Droppable 的唯一識別ID */}

                        {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>

                                {this.props.items.map((item, index) => (
                                    // 以 map 方式渲染每個拖曳卡片 (Draggable)
                                    <DragCard key={item.id} item={item} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}

export default DragCardBlock