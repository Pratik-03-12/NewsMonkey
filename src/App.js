import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
function App() {
  return (
    <div>
        <NavBar/>
        <News pageSize={5} country="in" category = "sports"/>
      </div>
  );
}

export default App;
