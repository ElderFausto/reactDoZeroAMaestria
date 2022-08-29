import React from "react";
import { useReducer } from "react";

const initialState = { count: 0 };

const actions = {
  decrement : 'decrement',
  increment: 'increment',
  multiply: 'multiply',
  half: 'half',
  reset: 'reset'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.decrement:
      return {
        count: state.count - 1
      };
    case actions.increment:
      return {
        count: state.count + 1
      };
    case actions.multiply: 
      return {
        count: state.count * 2
      }
    case actions.half: 
      return {
        count: state.count / 2
      }
    case actions.reset:
      return {
        count: initialState.count
      }    
    default:
      return state;
  }
}

const HookUseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter in reducer</h1>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({type: actions.decrement})}>-</button>
      <button onClick={() => dispatch({type: actions.increment})}>+</button>
      <button onClick={() => dispatch({type: actions.multiply})}>*</button>
      <button onClick={() => dispatch({type: actions.half})}>/2</button>
      <button onClick={() => dispatch({type: actions.reset})}>C</button>
      <hr />
    </div>
  )
};

export default HookUseReducer2;
