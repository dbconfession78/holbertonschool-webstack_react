import React from 'react'
import Square from './Square.jsx'

export default class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boardState: [['', '', ''], ['', '', ''], ['', '', '']],
            player: this.props.player
        }
        this.initialState = [['', '', ''], ['', '', ''], ['', '', '']];
        this.gameEnded = false;
    }

    checkBoard() {
        let winner = this.checkHorizontal();
        if (winner) {
            return winner;
        }
        winner = this.checkVertical()
        if (winner) {
            return winner;
        }
        winner = this.checkDiagonal()
        if (winner) {
            return winner;
        }
        return false
    }

    checkHorizontal() {
        const rows = this.state.boardState
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
        const rows = this.state.boardState;
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
        const rows = this.state.boardState;
        const first = rows[0][0]
        if (first !== "" && rows[1][1] === first && rows[2][2] === first) {
            return first;
        }
        const third = rows[0][2]
        if (third !== "" && rows[1][1] == third && rows[2][0] == third) {
            return third;
        }

        return false;
    }

    onSquareClick(row, col) {
        if (this.gameEnded) {
            alert('This game has ended. Please click reset to start a new one')
            return
        }
        let newBoardState = this.state.boardState;
        if (newBoardState[row][col] !== "") {
            alert('This tile has already been played. Please select another one')
        } else {
            this.props.onClick()
            newBoardState[row][col] = this.state.player
            this.setState({
                boardState: newBoardState,
                player: this.state.player === 'X' ? 'O' : 'X'
            })
            const winner = this.checkBoard()
            if (winner) {
                this.gameEnded = true;
                alert("Winner: " + winner)
            }
        }
    }

    onResetClick() {
        this.gameEnded = false;
        this.setState({
            boardState: this.initialState,
            player: "X"
        })
    }

    testClick() {
        console.log(this.state.boardState)
    }

    render() {
        const boardStyle = {
            display: 'inline-flex',
        }
        const tiles = this.state.boardState.map((column, i) =>
            <div key={i} className='column'>
                {column.map((tile, j) =>
                    <Square onClick={this.onSquareClick.bind(this)}
                            id={j.toString() + i.toString()}
                            key={j}
                            value={this.state.boardState[j][i]}
                    />)
                }
            </div>
        )
        return (
            <div className="Board" style={boardStyle}>
                {tiles}
                <button onClick={this.onResetClick.bind(this)} id='reset-button'>Reset</button>
                {/* <button onClick={this.testClick.bind(this)}>Test</button> */}
            </div>
        )
    }
}
