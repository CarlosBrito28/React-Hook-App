import { useState } from 'react';

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState); // 10

  const increment = (factor = 1) =>{
      setState(state + factor);
  }

  const reset = () =>{
      setState (initialState);
  }


  const decrement = (factor = 1) =>{
      setState ( state - factor);
  }

  return{
      state,
      increment,
      decrement,
      reset
  };
}
