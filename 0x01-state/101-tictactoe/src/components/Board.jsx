import React from 'react'
import Square from './Square.jsx'

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [["", "", ""], ["", "", ""], ["", "", ""]],
            player: "X",
            shouldReset: false,
        }
        this.squareClicked = this.squareClicked.bind(this)
        this.TEST_CLICK = this.TEST_CLICK.bind(this)
        this.onResetClick = this.onResetClick.bind(this)
        // this.shouldReset = false;

    }

    setPlayer(player) {
        this.setState({player: this.state.player === 'X' ? 'O' : 'X'})
    }
    squareClicked(player, id) {
        const col = parseInt(id[0])
        const row = parseInt(id[1])
        let newSquares = this.state.squares
        newSquares[row][col] = player
        this.setState({
            squares: newSquares
        })
        this.setPlayer()
    }

    checkBoard() {
        let winner = this.checkHorizontal();
        if (winner) {
            alert("Winner: " + winner);
        }
        winner = this.checkVertical();
        if (winner) {
            alert("Winner: " + winner);
        }
        winner = this.checkDiagonal();
        if (winner) {
            alert("Winner: " + winner);
        }
        return 0;
    }

    checkHorizontal() {
        const rows = this.state.squares
        for(let i=0; i < rows.length; i++) {
            const row = rows[i];
            const first = row[0];
            if (first !== "" && row[1] === first && row[2] === first){
                return first;
            }
        }
        return false;
    }

    checkVertical() {
        const rows = this.state.squares;
        for(let col=0; col < rows[0].length; col++) {
            const first = rows[0][col];
            const second = rows[1][col];
            const third = rows[2][col]
            if (first !== "" && second === first && third === first) {
                return first;
            }
        }
        return false;
    }

    checkDiagonal() {
        const first = this.state.squares[0][0]
        if (first !== "" && this.state.squares[1][1] === first && this.state.squares[2][2] === first) {
            return first;
        }
        const third = this.state.squares[0][2]
        if (third !== "" && this.state.squares[1][1] == third && this.state.squares[2][0] == third) {
            return third;
        }

        return false;
    }

    resetBoard() {
        this.setState({shouldReset: true})
    }

    onResetClick() {
        this.resetBoard();
    }

    TEST_CLICK() {

    }

    componentDidUpdate() {
        const winner = this.checkBoard();
        if (winner != 0) {
            alert("Winner: " + winner + "!");
        }
    }

    render() {
        let c = 1;
        let boardStyle = {
            display: 'inline-flex',
        }
        let rows = this.state.squares.map((row, i) =>
            <div key={i} className='row'>
                {row.map((square, j) =>
                    <Square
                        state={this.state}
                        value={this.state.squares[i][j]}
                        player={this.state.player}
                        onClick={this.squareClicked}
                        id={i.toString() + j.toString()}
                        key={j}/>
                    )
                }
            </div>
        );
        return (
            <div style={boardStyle} className="Board">
                {rows}
                <button onClick={this.onResetClick}>Reset</button>
            </div>

        )
    }
}
