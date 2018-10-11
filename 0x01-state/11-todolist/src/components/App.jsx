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
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }

    handleInputModified(event){
        this.setState({inputValue: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            inputValue: "",
            items: this.state.items.concat([this.state.inputValue])
        })
    }

    handleDeleteClick(i) {
        this.setState({
            items: this.state.items.filter(item => item !== i)
        });
    }



    render() {
        const list = this.state.items.map(i =>
            <Item key={i} value={i} deleteAction={() => this.handleDeleteClick(i)}/>
        );
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
                    {list}
                </ul>
            </div>
        );
    }
}
