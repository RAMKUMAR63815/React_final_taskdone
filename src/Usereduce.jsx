import React, { useReducer } from 'react'

export default function Usereduce() {
    const initiateState = {Count:0};
   
    function reducer (state,action){
        switch(action.type){
            case"increment":
                return {Count:state.Count +1};
            case "decrement":
                return {Count:state.Count -1};
            case"reset":
                return {Count:0}
                default:
                    return state;
        }
    }
     const [state,dispatch]=useReducer(reducer,initiateState);
    
  return (
    <div>
        <h1>count:{state.Count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}
