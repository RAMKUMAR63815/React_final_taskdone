// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [board, setBoard] = useState(Array(9).fill(""));
//   const [turn, setTurn] = useState("X");

//   const checkWinner = (b) => {
//     const wins = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let pattern of wins) {
//       const [a, b1, c] = pattern;

//       if (
//         b[a] &&
//         b[a] === b[b1] &&
//         b[a] === b[c]
//       ) {
//         return b[a];
//       }
//     }
//     return "";
//   };

//   const winner = checkWinner(board);

//   const handleClick = (index) => {
//     if (board[index] !== "" || winner) return;

//     const newBoard = [...board];
//     newBoard[index] = turn;
//     setBoard(newBoard);

//     setTurn(turn === "X" ? "O" : "X");
//   };

//   return (
//     <div className="container">
//       <h1>Tic Tac Toe</h1>

//       <h2>
//         {winner ? `Winner: ${winner}` : `Turn: ${turn}`}
//       </h2>

//       <div className="board">
//         {board.map((item, index) => (
//           <button
//             key={index}
//             className="cell"
//             onClick={() => handleClick(index)}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );}

import React, { useState } from "react";
import "./App.css";

function App() {
    const [board,setboard] = useState(Array(9).fill(""));
    const [turn,seturn] = useState("X");
    const checkWinner = (b) => {
     const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of wins) {
    const [a, b1, c] = pattern;

    if (
      b[a] &&
      b[a] === b[b1] &&
      b[a] === b[c]
    ) {
      return b[a];
    }
  }

  return "";
};

const Winner = checkWinner(board);

    const handlechange = (index)=>{
        if (board[index] !== "" || Winner)
            return;
    const newboard = [...board]
    newboard[index] = turn;
    setboard(newboard)
    seturn(turn==='X'? "O" : "X")
    return "";

    }

    return (<div className="container">
        <h1>Tic Tac Toe</h1>
        <h2>{Winner ?`Winner: ${Winner}`:`Turn:${turn}`}</h2>
        <div className="board">
            {board.map((value,index)=>(<button key={index} className="cell" onClick={()=>handlechange(index)}>{value}</button>)) }
        </div>
    </div>);
}
export default App;