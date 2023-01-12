import React, { Component } from 'react'

class Componentone extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleclick}>{this.props.children}</button>
      </div>
    )
  }
}

export default Componentone
