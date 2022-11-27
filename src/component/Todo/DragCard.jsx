import React from "react";
import { Draggable } from "react-beautiful-dnd";

class DragCard extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        
        return (
            <div className="">
                <Draggable draggableId={this.props.item.id} index={this.props.index}>
                    {/* // draggableId: 該卡片的唯一識別ID */}
                    {(provided, snapshot) => (

                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}

                            className="mb-4"
                        >
                            <div className="bg-dark2 border-[1px] border-yellow py-3 px-4 ">
                                {/* 實際上的卡片內容 */}
                                <p className="mb-2">{this.props.item.title}</p>
                                <p>{this.props.item.content}</p>
                                {/* 實際上的卡片內容 */}
                            </div>
                            <div className="border-t-[4px] border-t-yellow border-r-[7px] border-r-[transparent] w-[50px]"></div>
                        </div>
                    )}
                </Draggable>
            </div>
        )
    }
}

export default DragCard