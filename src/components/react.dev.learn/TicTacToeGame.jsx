import { useState } from "react";

function Square({ value, onSquareClick, winnerArr }) {
    return (
        <button
            className={`square ${winnerArr && "winner"}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }

    return null;
}

function Board({ xIsNext, squares, onPlay, currentMove }) {
    const winnerArr = Array(9).fill(false);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Победитель: ${squares[winner[0]]}`;
        winnerArr[winner[0]] = true;
        winnerArr[winner[1]] = true;
        winnerArr[winner[2]] = true;
    } else if (currentMove === 9) {
        status = `Ничья!`;
    } else {
        status = `Следующий ход: ${xIsNext ? "X" : "O"}`;
    }

    // задание 1. Только для текущего хода вместо кнопки покажите «Вы находитесь на ходу №…».
    let currentMoveStatus;
    if (currentMove === 0) {
        currentMoveStatus = `Игра начинается!`;
    } else if (calculateWinner(squares) || currentMove === 9) {
        currentMoveStatus = `Игра окончена!`;
    } else {
        currentMoveStatus = `Вы находитесь на ходу номер ${currentMove}`;
    }

    function handleCkick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const boardRows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    return (
        <>
            <div>{currentMoveStatus}</div>
            <div className="status">{status}</div>

            {boardRows.map((row, i) => {
                return (
                    <div key={i} className="boardRow">
                        {row.map((k) => {
                            return <Square key={k} value={squares[k]} onSquareClick={() => handleCkick(k)} winnerArr={winnerArr[k]} />
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [historySortingDirection, setHistorySortingDirection] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = `Перейти на ход ${move}`;
        } else {
            description = `Перейти в началу игры`;
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });

    if (historySortingDirection) {
        moves.sort((a, b) => a.key - b.key);
    } else {
        moves.sort((a, b) => b.key - a.key);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>
            <div className="game-info">
                <button onClick={() => setHistorySortingDirection(!historySortingDirection)}>Отсортировать ходы</button>
                <ul>{moves}</ul>
            </div>
        </div>
    )
}