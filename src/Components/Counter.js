import React from 'react'
import { connect } from "react-redux"
import { increment, decrement, reset } from '../JS/actions/actionCounter'

const Counter = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{props.count}</h2>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset} >Reset</button>
    </div>
  )
}

// const Mdp = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement:()=>dispatch(decrement())
//   }
// }

// const Mdp = {
//   increment,
//   decrement,
//   reset
// }

const Msp = (state) => {
  return {
    // count: state.count
    count: state.reducerCounter.count
  }
}

// export default connect(Msp, Mdp)(Counter)
export default connect(Msp, { increment, decrement, reset })(Counter)