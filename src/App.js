import React from 'react';
import './App.css';
import UserList from './components/Userlist/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>GitSearch облегчает ваш поиск в GitHub</h1>
      </header>
      <h2 className='App-h2'>Поиск юзеров</h2>
      <input
        className='App-input'
        type="search"
        placeholder="введите имя юзера"
        name="search">
      </input>
      <UserList />
    </div>
  );
}

export default App;
