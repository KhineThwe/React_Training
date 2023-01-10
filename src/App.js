import React, { Component } from 'react'
import Componentone  from './component/Component1';
import Componenttwo  from './component/Component2';

class App extends Component {
  state = {
    name:"something"
  }

  doSomething=()=>{
    this.setState({
      name:"doing"
    })
  }
  render() {
    return (
      <div>
        {/* <App1/> */}
        {/* <Componentone name={["khine","zar","thwe"]}/>
        <Componenttwo/> */}
        <h1>{this.state.name}</h1>
       <button onClick={this.doSomething}>Click Me</button>
      </div>
    )
  }
}

class App1 extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App;
