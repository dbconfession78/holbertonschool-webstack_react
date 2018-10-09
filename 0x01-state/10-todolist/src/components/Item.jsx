import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        }
        this.onClick = this.onClick.bind(this)
    }

    render() {
        return (
            <div onClick={this.onClick}>
                {this.state.done ?
                    <li className='done'>{this.props.value}</li>
                    :
                    <li>{this.props.value}</li>
                }
            </div>
        )
    }

    onClick(event) {
        this.setState({done: !this.state.done})
    }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Item;
