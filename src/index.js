import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './components/o1-useState/CounterApp';
import { CounterWithCustomHook } from './components/o1-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CounterWithCustomHook />

);

