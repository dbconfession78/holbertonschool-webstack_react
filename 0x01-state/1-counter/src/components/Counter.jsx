import React from 'react';

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value

		};
	}


	render() {
		return (
			<h1>{this.state.value}</h1>
		)
	};
}

export default Counter;
