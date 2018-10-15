import React from 'react'

export default class Square extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        const row = parseInt(this.props.id[0])
        const col = parseInt(this.props.id[1])
        this.props.onClick(row, col)
    }

    render() {
        const size = '40px';
        const squareStyle = {
            border: 'solid 1px black',
            height: size,
            width: size,
            lineHeight: size,
            textAlign: 'center'
        };
        return (
            <div onClick={this.onClick.bind(this)} style={squareStyle} className="Square">
                {this.props.value}
            </div>
        )
    }
}
