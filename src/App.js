import React from 'react';
import logo from './logo.png';
import './App.css';
import { Posts } from './features/posts/Posts.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Posts />
        
      </header>
    </div>
  );
}

export default App;
