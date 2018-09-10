import React from 'react';

export default class App extends React.Component {
	   setTitle() {
	   			
	   }	   
	render() {
		document.title = "Holberton School webpack";
		return (
			<div style={ { textAlign: 'center' } }>
				   <h1>Welcome to Holberton School</h1>
				</div>
				);
		}
}
