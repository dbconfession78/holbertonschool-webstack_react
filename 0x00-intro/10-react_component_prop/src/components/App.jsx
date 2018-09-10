import React from 'react';
import Title from './Title.jsx';

export default class App extends React.Component {
  render() {
    document.title = "Holberton School webpack";
    return (
      <div style={ { textAlign: 'center' } }>
        <Title name="Holberton School"/>
      </div>
    );
  }
}
