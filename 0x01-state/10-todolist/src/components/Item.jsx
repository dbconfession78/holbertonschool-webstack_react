import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({done: !this.state.done})
    }

    setClassName() {
        if (this.state.done)
            return 'done'
    }

    render() {
        return (
            <li id={this.props._key} onClick={this.handleClick} className={this.setClassName()}>{this.props.value}</li>
        )
    }

    // this is how to set className conditionally:

    // render() {
    //     return (
    //         <div onClick={this.handleClick}>
    //             {this.state.done ?
    //                 <li className='done'>{this.props.value}</li>
    //                 :
    //                 <li>{this.props.value}</li>
    //             }
    //         </div>
    //     )
    // }

}

Item.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Item;
