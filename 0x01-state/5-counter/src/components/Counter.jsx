import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initValue
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick () {
		this.incrementCounter(1)
	}

	incrementCounter (incrementValue) {
		this.setState(
			{value: this.state.value + incrementValue}
		);
	}

	setCounterValue(v) {
		this.setState(
			{value: v}
		);
	}

	render() {
		return (
			<div style={wrapperStyle} className='Wrapper'>
				<div id='counter-value'>{this.state.value}</div>
				<button id='new-value-button' onClick={this.handleClick}>New Value</button>
			</div>
		)
	};
}

const wrapperStyle = {
	display: 'inline-flex'
}

Counter.propTypes = {
	value: PropTypes.number.isRequired
};

Counter.defaultProps = {
	value: 0
}

export default Counter;
