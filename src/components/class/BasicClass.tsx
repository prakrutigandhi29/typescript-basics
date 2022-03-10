import React, { Component } from 'react'

type StateCount={
    count:number
}
type Props={
    message:String
}

export class BasicClass extends Component<Props,StateCount> {

    state={count:0}
    handleClick=()=>{
          this.setState((prevState)=>({
              count:prevState.count+5
          }))
    }
  render() {
      
    return (
      <div>
          <button onClick={this.handleClick}></button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default BasicClass
