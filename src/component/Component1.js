import React, { Component } from 'react'

class Componentone extends Component {
  render() {
    return (
      <div>
       {
        this.props.name.map(function name(val){
            return <h1>{val}</h1>;
        })
       }
       
      </div>
    )
  }
}

export default Componentone
