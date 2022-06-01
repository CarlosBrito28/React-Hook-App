import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender React',
    done: false
}];
export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos);
  return (
    <div>
        <h1>TodoApp</h1>
        <hr/>

        <ul>
            <li>Hola</li>
            <li>Mundo</li>
            <li>Hola de nuevo</li>
        </ul>
    </div>
  )
}
