import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Поиск юзеров</h1>
      <input
         type="search"
         placeholder="Поиск"
         name="search"></input>
        <br></br>
        <p>Здесь будет актуальный список пользователей</p>
    </div>
  );
}

export default App;
