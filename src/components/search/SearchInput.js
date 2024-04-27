import React from 'react';
import * as S from "./SearchInputStyled";
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoaded, setUsername, setUsers } from '../../store/usersSlice';
import { searchUsers } from '../../Api';

 const SearchBox = () => {
   const dispatch = useDispatch()
   const username = useSelector((state) => state.users.username)
   console.log(username);
   const onChangeHandler = e => {
      dispatch(setUsername(e.target.value));
   }
   const searchHeandler = () => {
      console.log("Click");
      dispatch(setIsLoaded());
      searchUsers(username).then(data => {
         console.log(data.items);
         dispatch(setUsers(data));
      });
   }
   return (
      <S.SearchConteiner>
         <S.Input type="text" placeholder="введите имя юзера" value={username} onChange={onChangeHandler}/>
         <S.Button onClick={searchHeandler}>Найти</S.Button>
      </S.SearchConteiner>
   )
}

export default SearchBox