import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DragCardBlock from "./DragCardBlock";
import { nanoid } from 'nanoid';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ItemObj: {
                tasks: {
                    items: [
                        { title: "會員系統", content: "登入、註冊、權限管理", score: 0, id: nanoid() },
                        { title: "應徵者的線上履歷編輯器", content: "", score: 0, id: nanoid() },
                        { title: "前台職缺列表", content: "職缺詳細內容、點選可發送應徵意願", score: 0, id: nanoid() },
                        { title: "後台職缺管理功能", content: "資訊上架、下架、顯示應徵者資料", score: 0, id: nanoid() },
                    ]
                },
                sorted: {
                    items: []
                }
            }
        }
    }

    style = {
        "writing-mode": "vertical-rl",
    };

    onDragEnd = (event) => {
        const { source, destination } = event;
        console.log(source, destination);
        if (!destination) {
            console.log("沒有目的地");
            return;
        }

        // 拷貝新的 items (來自 state) 
        let newItemObj = Object.assign({}, this.state.ItemObj);

        // 用 splice 處理拖曳後資料, 組合出新的 items
        // splice(start, deleteCount, item )

        // 從 source.index 剪下被拖曳的元素
        const [remove] = newItemObj[source.droppableId].items.splice(
            source.index,
            1
        );

        //在 destination.index 位置貼上被拖曳的元素
        newItemObj[destination.droppableId].items.splice(destination.index, 0, remove);

        console.log("newItemObj:", newItemObj);

        // 設定新的 items
        this.setState({
            ItemObj: newItemObj
        });
    };

    render() {
        return (
            <div className="flex justify-between">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div>
                        <h2 className="font-medium text-2xl flex items-baseline">產品待辦清單 <span className="text-base ml-3 mb-8">Product Backlog</span></h2>
                        <DragCardBlock items={this.state.ItemObj.tasks.items} title="tasks" onDragEnd={this.onDragEnd} />
                    </div>
                    <h6 className="flex items-center leading-6" style={this.style}>
                        優先度高
                        &nbsp;
                        <div className="w-[1px] h-[200px] bg-white"></div>
                        <div className="border-t-[10px] border-b-[5px] border-x-[5px] border-t-white border-b-[transparent] border-x-[transparent]"></div>
                        優先度低
                    </h6>
                    <div className="border-2 border-dashed border-white w-[424px] h-[418px] mb-[106px]">
                        <DragCardBlock items={this.state.ItemObj.sorted.items} title="sorted" onDragEnd={this.onDragEnd} />
                    </div>
                </DragDropContext>
            </div>
        )
    }
}

export default Todo