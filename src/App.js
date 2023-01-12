import React, { Component } from 'react'
import Componentone  from './component/Component1';
import './App.css';
import Componenttwo  from './component/Component2';

class App extends Component {
  register = ()=>{
    console.log("Register");
  }
  login = ()=>{
    console.log("Login");
  }
  submit = ()=>{
    console.log("Submit");
  }
  render() {
    return (
      <div>
        <Componentone handleclick={this.register}>First Time</Componentone>
        <Componentone handleclick={this.login}>Second Time</Componentone>
        <Componentone handleclick={this.submit}>Third Time</Componentone>
      </div>
    )
  }
}

export default App;
