import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const sayHello = () => {
    
    let name = 'John';
    console.log('Hello, ' + name);
  };

  
  sayHello();

  return (
    <div>
   <h1>Hello John!</h1>
   <p>Velkommen til siden!</p>
    </div>
  );
}
export default App
