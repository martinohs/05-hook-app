import React from 'react';
import ReactDOM from 'react-dom/client';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
// import HookApp from './HookApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      // <CounterApp/>
      // <CounterWithCustomHook></CounterWithCustomHook>
      // <SimpleForm></SimpleForm>
      <FormWithCustomHook></FormWithCustomHook>
   
);