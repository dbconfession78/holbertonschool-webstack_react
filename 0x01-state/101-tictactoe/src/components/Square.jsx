import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
        this.didReset = false
        this.player = this.props.player;
    }

    onClick(event) {
        this.props.onClick(this.props.player, this.props.id)
        this.setState({value: this.props.player})
    }

    render() {
        const squareSize = '40px';
        let squareStyle = {
            border: 'black solid 1px',
            width: squareSize,
            height: squareSize,
            textAlign: 'center',
            lineHeight: '40px'
        }
        return (
            <div onClick={this.onClick.bind(this)} style={squareStyle}>
                {this.state.value}
            </div>
        );
    }

    checkReset() {
        if (this.didReset) {
            this.didReset = false
            this.props.state.shouldReset = false
        }
        if (this.props.state.shouldReset) {
            this.didReset = true;
        }
        if (this.didReset) {
            this.setState({value: ""})
            this.player = "X"
        }
    }

    componentDidUpdate() {
        this.checkReset()
    }
}
