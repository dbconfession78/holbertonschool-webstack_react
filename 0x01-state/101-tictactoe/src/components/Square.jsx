import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            player: "X",
        }
        this.didReset = false
        this.onClick = this.onClick.bind(this);
        this.onReset = this.onReset.bind(this);
        this.player = this.props.player;

    }

    onClick(event) {
        this.props.onClick(this.props.player, this.props.id)
        this.setState({value: this.props.player})
    }

    onReset() {
        alert()
        this.setState({value: "", player: "X"});
    }

    render() {
        const squareSize = '40px';
        let squareStyle = {
            border: 'black solid 1px',
            width: squareSize,
            height: squareSize,
            margin: 'auto',
            textAlign: 'center',
            verticalAlign: 'middle',
            lineHeight: '40px'
        }
        return (
            <div onClick={this.onClick} style={squareStyle} className="Square">
                {this.state.value}
            </div>
        );
    }

    componentDidUpdate() {
        if (this.didReset) {
            this.didReset = false

            // state shouldn't be set like this.
            this.props.state.squares= [["", "", ""], ["", "", ""], ["", "", ""]];
            this.props.state.shouldReset = false
        }
        if (this.props.state.shouldReset) {
            this.didReset = true;
        }
        if (this.didReset) {
            this.setState({value: ""})
        }
    }

    componentDidMount() {
        console.log(this.props.parProps)
        this.player = "X"
    }
}
