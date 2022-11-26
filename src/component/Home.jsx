import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex justify-center items-center flex-col h-screen">
                <h1 className="text-yellow flex items-baseline text-9xl font-bold mb-20">Scrum <img src="./src/assets/Subtract.png" alt="h1" className="mx-5" /> 新手村</h1>
                <p className="text-[28px] text-center mb-[142px]">哈囉，歡迎加入TT資訊，<br />在正式加入專案開發之前，<br />需要請你先了解 Scrum 的流程與精神！<br />請接受挑戰任務，<br />成功通過 Scrum 新手村的挑戰任務吧～</p>
                <button className="btn-primary" onClick={this.props.activeGame}>
                    <div className="top-left-triangle"></div>
                    <div className="bottom-right-triangle absolute"></div>
                    接受挑戰
                </button>
            </div>
        )
    }
}

export default Home