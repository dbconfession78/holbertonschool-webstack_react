import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(event) {
        this.setState({done: !this.state.done});
    }

    setClassName() {
        if (this.state.done)
            return 'done'
    }

    render() {
        return (
            <li onClick={this.handleItemClick} className={this.setClassName()}>
                {this.props.value}
                <button onClick={this.props.deleteAction}>delete</button>
            </li>
        )
    }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Item;
