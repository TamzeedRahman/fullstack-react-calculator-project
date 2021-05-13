import React, { Component } from "react"
import Display from "./Components/Display"
import Buttons from "./Components/Buttons"

import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      calculatorScreenValue: 0,
      ourLastValueNum: null,
      operation: ""
    }
  
  }
  
  resetAndClearFunc = () => {
    this.setState({ 
      calculatorScreenValue: 0, 
      ourLastValueNum: null, 
      operation: "" 
    })
  }
  
  positiveNegativeFunc = () =>{
    this.setState({ 
      calculatorScreenValue: this.state.calculatorScreenValue * -1
    })
  }

  ourAnswerFunc = () => {
    if(this.state.operation === "+"){
      this.setState({ 
        calculatorScreenValue: 
        this.state.ourLastValueNum + this.state.calculatorScreenValue 
      })
    } else if(this.state.operation === "-"){
      this.setState({ 
        calculatorScreenValue: 
        this.state.ourLastValueNum - this.state.calculatorScreenValue
      })
    } else if(this.state.operation === "x"){
      this.setState({ 
        calculatorScreenValue: 
        this.state.ourLastValueNum * this.state.calculatorScreenValue
      })
    } else if(this.state.operation === "/"){
      this.setState({ 
        calculatorScreenValue: 
        Math.round(this.state.ourLastValueNum / this.state.calculatorScreenValue)
      })
    }
  }

  operationManagerFunc = (e) => {
    this.setState( (prevState) => ({ 
      ourLastValueNum: prevState.calculatorScreenValue, 
      calculatorScreenValue: "", // The initial value of calculatorScreenValue was 0. Could you use 0 here too?
      operation: e.target.value
    }))
  }

  displayFunc = (e) => {
    this.setState({ 
      calculatorScreenValue: 
      Number(String(this.state.calculatorScreenValue).concat(e.target.value))
    })
  }

  render() {
    return (
      <section>
        <div className="calculator">
          <Display 
          calculatorScreenValue={this.state.calculatorScreenValue} 
          />
          <Buttons 
          displayFunc={this.displayFunc} 
          positiveNegativeFunc={this.positiveNegativeFunc} 
          resetAndClearFunc={this.resetAndClearFunc} 
          operationManagerFunc={this.operationManagerFunc} 
          ourAnswerFunc={this.ourAnswerFunc}
          />
        </div>
      </section>
    )
  }
}

export default App
