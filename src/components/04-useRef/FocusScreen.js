import React, { useRef } from 'react';
import '../02-useEffect/effects.css';
export const FocusScreen = () => {


    const inputRef = useRef();
    //console.log(ref);


    const handleClick = () =>{
        //document.querySelector('input').select(); // con la linea de abajo no se necesita esta
        inputRef.current.select();
    }
  return (
    <div>
        <h1>Focus Screen</h1>
        <hr></hr>
        <input
        ref = {inputRef} 
        className="form-control"
        placeholder="Su nombre"
        ></input>

        <button 
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}
        
        >
            Focus
            </button>
    </div>
  )
}
