import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {
const [formState, setFormState] = useState({
    name:'',
    email:''
});
const{ name, email} = formState;

// useEffect( () => {
//     console.log('hey!')
// }, [] );

// useEffect( () => {
//     console.log('formState Cambio!')
// }, [formState] );

// useEffect( () => {
//     console.log('email cambio!')
// }, [e] );

const handleImputChange = ({target}) =>{
    setFormState({
        ...formState,
        [target.name]: target.value
    });
}

  return (
    <>
        <h1>UseEffect</h1>
        <hr/>
        <div className="form-group">
            <input
            type="text"
            name="name"
            className="form-control"
            placeholder= "tu nombre"
            autoComplete="off"
            value = { name }
            onChange= {handleImputChange}
             />
        </div>


        <div className="form-group">
            <input
            type="text"
            name="email"
            className="form-control"
            placeholder= "email.com"
            autoComplete="off"
            value = { email }
            onChange= {handleImputChange}
             />
        </div> 
        { (name === '123') && <Message/>}
    </>

  )

}
