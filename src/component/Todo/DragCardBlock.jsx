import React from "react";
import { Droppable } from "react-beautiful-dnd";
import DragCard from "./DragCard";

class DragCardBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className="">
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
            </div>
        )
    }
}

export default DragCardBlock