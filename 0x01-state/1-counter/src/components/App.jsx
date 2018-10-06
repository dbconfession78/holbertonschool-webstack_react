import React from 'react';
import Counter from './Counter.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: props.counterValue,
        }
    }

    render() {
        return (
            <div>
                <Counter value={98} />
                <Counter />
            </div>
        );
    }
}
