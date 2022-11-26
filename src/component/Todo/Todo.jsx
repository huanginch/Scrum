import React from "react";
import DragCard from "./DragCard";
import DragCardBlock from "./DragCardBlock";
import { nanoid } from 'nanoid';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { title: "會員系統", content: "登入、註冊、權限管理", score: 0, id: nanoid() },
                { title: "應徵者的線上履歷編輯器", content: "", score: 0, id: nanoid() },
                { title: "前台職缺列表", content: "職缺詳細內容、點選可發送應徵意願", score: 0, id: nanoid() },
                { title: "後台職缺管理功能", content: "資訊上架、下架、顯示應徵者資料", score: 0, id: nanoid() },
            ],
            sprintList: {
                items: []
            }
        }
    }

    style = {
        "writing-mode": "vertical-rl",
    };

    render() {
        return (
            <div className="flex justify-between">
                <div>
                    <h2 className="font-medium text-2xl flex items-baseline">產品待辦清單 <span className="text-base ml-3 mb-8">Product Backlog</span></h2>
                    <DragCardBlock items={this.state.items} title={"Product Backlog"}/>
                </div>
                <h6 className="flex items-center leading-6" style={this.style}>
                    優先度高
                    &nbsp;
                    <div className="w-[1px] h-[200px] bg-white"></div>
                    <div className="border-t-[10px] border-b-[5px] border-x-[5px] border-t-white border-b-[transparent] border-x-[transparent]"></div>
                    優先度低
                </h6>
                
            </div>
        )
    }
}

export default Todo