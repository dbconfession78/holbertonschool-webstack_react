import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputValue: ""
        }
    }
    render() {
        return (
            <ul>
                {this.state.items.map((item, i) => {
                    return (
                        <Item key={i} value={item} />
                    )
                })}
            </ul>
        );
    }
}
