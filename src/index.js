import React from 'react';
import ReactDOM from 'react-dom/client';

//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { CounterApp } from './components/o1-useState/CounterApp';
//import { CounterWithCustomHook } from './components/o1-useState/CounterWithCustomHook';
//import { HooksApp } from './HooksApp';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { RealExampleRef } from './components/04-useRef/RealExampleRef';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { CallBackHook } from './components/06-memos/CallBackHook';
import { TodoApp } from './components/08-useReducer/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <TodoApp />

);

//import './components/08-useReducer/intro-reducer';
