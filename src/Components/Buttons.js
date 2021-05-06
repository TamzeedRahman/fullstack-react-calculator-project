import React from 'react'
import "./Buttons.css"

function Buttons(props) {

  const { 
    displayFunc, 
    positiveNegativeFunc, 
    resetAndClearFunc, 
    operationManagerFunc, 
    ourAnswerFunc 
  } = props

  return (
    <>
      <div className="buttons">
        <button value={0} onClick={displayFunc}>0</button>
        <button value={1} onClick={displayFunc}>1</button>
        <button value={2} onClick={displayFunc}>2</button>
        <button value={3} onClick={displayFunc}>3</button>
        <button value={4} onClick={displayFunc}>4</button>
        <button value={5} onClick={displayFunc}>5</button>
        <button value={6} onClick={displayFunc}>6</button>
        <button value={7} onClick={displayFunc}>7</button>
        <button value={8} onClick={displayFunc}>8</button>
        <button value={9} onClick={displayFunc}>9</button>
        <button value={"+"} onClick={operationManagerFunc}>+</button>
        <button value={"-"} onClick={operationManagerFunc}>-</button>
        <button value={"x"} onClick={operationManagerFunc}>x</button>
        <button value={"/"} onClick={operationManagerFunc}>/</button>
        <button onClick={positiveNegativeFunc}>+/-</button>
        <button onClick={ourAnswerFunc}>=</button>
        <button value={0} onClick={resetAndClearFunc}>Clear</button>
      </div> 
    </>
  )
}

export default Buttons