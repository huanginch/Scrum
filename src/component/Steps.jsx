import React from "react";

class Steps extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.counter}/7
            </div>
        )
    }
}

export default Steps