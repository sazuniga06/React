import { useState, useEffect } from "react"
import confetti from 'canvas-confetti'
import { Square } from "./Components/Square.jsx"
import { Turns } from "./Components/Constants.jsx"
import { checkWinnerFrom , checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./Components/WinnerModal.jsx"

import { saveGameToStorage, resetGameStorage } from "./logic/Storage/index.js"

function App() {
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? Turns.X
  })
  const [winner, setWinner] = useState(null)
  
  const resetGame = () => 
  {
      setBoard(Array(9).fill(null))
      setTurn(Turns.X)
      setWinner(null)
      resetGameStorage()

  }

  const updateBoard = (index) =>
  {
//Si el espacio esta lleno no puede actualizar 
    if(board[index] || winner)return
//Actualiza el tablero
    const newBoard = [...board]
    newBoard [index] = turn
    setBoard(newBoard)
//Actualiza el turno
    const newTurn = turn == Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
// Guardar partida
    saveGameToStorage({board: newBoard, turn: newTurn})
//Revisamos si hay ganadores
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner)
    {
      confetti()
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard))
    {
      setWinner(false) //empate
    }
  }

  useEffect(() => {
    console.log('UseEffect')
  }, [winner])

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className="game">
        {
          board.map((square, index)=>{
            return(
              <Square
                key={index}
                index = {index}
                updateBoard={updateBoard}
              >
                {square}
                </Square>
            )
          })
        }
      </section>

     <section className="turn">
        <Square isSelected = {turn == Turns.X}>
          {Turns.X}
        </Square>
        <Square isSelected = {turn == Turns.O}>
          {Turns.O}
        </Square>
     </section> 

     <WinnerModal resetGame = {resetGame} winner= {winner}/>

    </main>
  )
}


export default App
