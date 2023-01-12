import React, { Component } from 'react'
import Componentone  from './component/Component1';
import Componenttwo  from './component/Component2';

class App extends Component {
  nameInput = React.createRef(); 
  state = {
    person: [
      { name: "My My" },
      { name: "ma ma" },
      { name: "Mo Mo" },
      { name: "me me" },
    ], 
  }
  addNew = ()=>{
    this.setState({
      person:[...this.state.person,{name:this.nameInput.current.value}]
    })
  }
  delete = (text)=>{
     let newval = this.state.person.filter((val)=>val.name !== text )
     this.setState({
      person:newval
    })
  }
  render() {
    return (
      <div>
        {this.state.person.map((val) => {
          return (
            <h1 key={val.name} onClick={this.delete.bind(this,val.name)}>
              {val.name}
            </h1>
          );
          
        })}
        <input type="text" ref={this.nameInput}/>
       <button onClick={this.addNew}>Click Me</button>
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
