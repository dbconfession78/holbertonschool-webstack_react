import React from 'react';
import Item from './Item.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Read documentation', 'Do the tutorial', 'Add comment'],
            inputValue: ""
        }
        this.handleInputModified = this.handleInputModified.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (
            <div className="Wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New:
                        <input type="text" value={this.state.inputValue} onChange={this.handleInputModified} />
                    </label>
                    <input type='submit' value='Add' />
                </form>
                <ul>
                    {this.state.items.map((item, i) => {
                        return (
                            <Item key={i} value={item} />
                        )
                    })}
                </ul>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault()
        this.updateItems()
        this.setState({inputValue: ""})
    }

    updateItems() {
        this.setState({
            items: this.state.items.concat([this.state.inputValue])
        });
    }

    handleInputModified(event){
        this.setState({inputValue: event.target.value})
    }
}
