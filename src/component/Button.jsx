import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <button className="btn-primary" onClick={this.props.addPageCounter}>
                    <div className="top-left-triangle"></div>
                    <div className="bottom-right-triangle"></div>
                    {this.props.instruction}
                </button>
            </div>
        )
    }
}

export default Button