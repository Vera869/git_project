import React from 'react';
//import './App.css';
import SearchBox from './components/search/SearchInput';
import UserList from './components/userlist/UserList';
import HeaderBox from './components/header/Header'
import { Provider} from 'react-redux'
import {store} from './store/index'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HeaderBox />
      {/* <h2 className='App-h2'>Поиск юзеров</h2> */}
      <SearchBox />
      <UserList />
      </Provider>
    </div>
  );
}

export default App;
