import React, { Component } from 'react'

type CounterProps=  {
    message:string
}
type CounterState = {
    count : number
}
/* The count value is 5 */
// class Counter extends Component< {},CounterState> {  for only states
// class Counter extends Component<CounterProps> { for only props

class Counter extends Component<CounterProps,CounterState> {


    state = {
       count: 0
    }

  handleClick = () =>{
    this.setState((prevState)=>({count:prevState.count+1}))
  }
  
    render() {
    return (
      <div>
        <div>
            <button onClick={this.handleClick}>Increment</button>      
        </div>
        <h2>
             {this.props.message} - {this.state.count}  
        </h2>
      </div>
    )
  }
}

export default Counter