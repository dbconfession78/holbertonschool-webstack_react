import React from 'react'
import Board from './Board.jsx'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            player: "X"
        }
    }

    changePlayer() {
        this.setState({player: this.state.player === 'X' ? 'O' : 'X'})
    }

    render() {
        return (
            <div>
                <div>
                    It is player {this.state.player}'s turn.
                </div>
                <Board onClick={this.changePlayer.bind(this)} player={this.state.player} />
            </div>
        );
    }
}
