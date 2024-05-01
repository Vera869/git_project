import React from 'react';
// import SearchBox from './components/search/SearchInput';
// import UserList from './components/userlist/UserList';
// import HeaderBox from './components/header/Header'
// import { Provider} from 'react-redux'
// import {store} from './store/store'
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      {/* <Provider store={store}>
      <HeaderBox />
      <SearchBox />
      <UserList />
      </Provider> */}
    </div>
  );
}

export default App;
