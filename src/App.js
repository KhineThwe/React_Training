import React, { Component } from 'react'
import Componentone  from './component/Component1';
import Componenttwo  from './component/Component2';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <App1/>
        <Componentone/>
        <Componenttwo/>
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
