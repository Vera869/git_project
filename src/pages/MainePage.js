import React from 'react';
import * as S from "./PagesStyled";
import { Provider } from 'react-redux';
import { store } from '../store/store';
import SearchBox from '../components/search/SearchInput';
import UserList from '../components/userlist/UserList';

function Main() {
   return (
      <S.App>
         <Provider store={store}>
            <SearchBox />
            <UserList />
         </Provider>
      </S.App>
   )
}

export default Main