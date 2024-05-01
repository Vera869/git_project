import React from 'react';
import * as S from "./PagesStyled";
import SearchBox from '../components/search/SearchInput';
import UserList from '../components/userlist/UserList';

function Main() {
   return (
      <S.App>
         <SearchBox />
         <UserList />
      </S.App>
   )
}

export default Main