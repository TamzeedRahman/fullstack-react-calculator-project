import React, { Component } from "react"
import "./Display.css"

export class Display extends Component {
constructor() {
  super()
 this.commaFormater = new Intl.NumberFormat("en");
}
  render() {
    const { calculatorScreenValue } = this.props
    return (
      <div className="display">
        <input 
        type="text" 
        value={this.commaFormater.format(calculatorScreenValue)}
        >
        </input>
      </div>
    )
  }
}

export default Display