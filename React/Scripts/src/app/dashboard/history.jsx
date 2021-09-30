import React from "react";

export default class History extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name
        }
    }

    componentDidMount = () => {
        alert('hello history !');
    }

    render() {
        return (
            <div>
                <h1>This is history of {this.state.name}</h1>
            </div>
        )
    }
}