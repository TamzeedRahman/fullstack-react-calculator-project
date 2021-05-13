import React, { Component } from "react"
import "./Display.css"


// This might be better suited as a functional component since it doesn't use state or lifecycle methods
export class Display extends Component {
constructor() {
  super()
 this.commaFormater = new Intl.NumberFormat("en");
}
  
  // You could also create commaFormater here, e.g. :
  // commaFormater = new Intl.NumberFormat("en")
  
  render() {
    const { calculatorScreenValue } = this.props
    return (
      <div className="display">
        <input 
        type="text" 
        {/* I love that you are formatting the display number in your render logic - way to think in react! */}
        value={this.commaFormater.format(calculatorScreenValue)}
        >
        </input>
      </div>
    )
  }
}

export default Display
