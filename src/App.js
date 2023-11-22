import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.name = "alireza"
    this.state = { name: "alireza" }
  }
  click1 = () => {
    console.log("hello world");
  }
  render = () => {
    return (
      <>
        First method
        <input type="button" value="Click Me" onClick={this.click1} />
        <br />
        Second method
        <input type="button" value="Click Me2" onClick={() => { console.log("goodbye world") }} />

        <p>{this.name}</p>
        <input type="button" value="change name" onClick={() => { this.name = "ahmad" }} />

        <p>{this.state.name}</p>
        <input type="button" value="change name" onClick={() => { this.setState({ name: "ahmad" }) }} />


      </>
    )
  }
}

export default App