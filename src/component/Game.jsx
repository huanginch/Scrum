import React from "react";
import Button from "./Button";
import Steps from "./Steps";
import Todo from "./Todo/Todo";

class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    // completeTask = (this) => {

    // }

    render() {
        if(this.props.counter === 1) {
            return (
                <div className="container flex flex-col justify-center h-auto mt-10 ">
                    <div className="mb-2 bg-avatar bg-cover w-[166px] h-[164px] flex items-center">
                        <img src="./src/assets/avatar2.svg" alt="avatar" className="mx-auto" />
                    </div>
                    <p className="mb-6">PO 小敏</p>
                    <div className="mb-[107px] relative">
                        <div className="dialogue-triangle-up">
                            <div className="inner-triangle-up"></div>
                        </div>
                        <div className="bg-dark2 border-[1px] border-blue px-12 py-10">
                            <p className="mb-6">我是資訊，開發A組的PO，小敏。</p>
                            <p className="mb-6">PO也就是產品負責人(Product Owner)。產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！</p>
                            <p>剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！</p>
                        </div>
                    </div>
                    
                    <div className="mb-10 ml-auto">
                        <Button instruction={"接受挑戰"} addPageCounter={this.props.addPageCounter} />
                    </div>
                    <div className="-ml-10">
                        <Steps counter={this.props.counter} />
                    </div>
                </div>
            )
        }
        else if(this.props.counter === 2) {
            return (
                <div className="container flex flex-col justify-center h-auto mt-10 ">
                    <div className="flex justify-between">
                        <div>
                            <div className="mb-2 bg-avatar bg-cover w-[166px] h-[164px] flex items-center">
                                <img src="./src/assets/avatar1.svg" alt="avatar" className="mx-auto" />
                            </div>
                            <p className="mb-6">PO 小敏</p>
                        </div>
                        <div className="mb-[107px] relative">
                            <div className="dialogue-triangle-left">
                                <div className="inner-triangle-left"></div>
                            </div>
                            <div className="bg-dark2 border-[1px] border-blue px-12 py-10 max-w-2xl">
                                <p>請試著把需求放到產品待辦清單，並調整待辦的優先度順序。我們公司也推薦使用Jira來做任務的管理呢！</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Todo />
                    </div>
                    <div className="flex items-center">
                        <p className="mr-2">推薦工具：</p>
                        <img src="../src/assets/Jira.png" alt="" />
                    </div>
                    <div className="mb-10 ml-auto">
                        <Button instruction={"完成"} addPageCounter={this.props.addPageCounter} onClick={this.completeTask}/>
                    </div>
                    <div className="-ml-10">
                        <Steps counter={this.props.counter} />
                    </div>
                </div>
            )
        }
        
    }
}

export default Game