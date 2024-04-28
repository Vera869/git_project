import React from 'react';
import * as S from "./SearchInputStyled";
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers } from '../../Api';
import { setIsLoading, setUsername, setUsers } from '../../store/usersSlice';

 const SearchBox = () => {
   const dispatch = useDispatch()
   const username = useSelector((state) => state.users.username)
   const isLoading = useSelector((state) => state.users.isLoading)
   console.log(isLoading);
   console.log(username);
   const onChangeHandler = e => {
      dispatch(setUsername(e.target.value));
   }
   const searchHeandler = () => {
      console.log("Click");
      dispatch(setIsLoading(true));
      searchUsers(username).then(data => {
         console.log(data.items);
         dispatch(setUsers(data.items));
         dispatch(setIsLoading(false));
      });
      
   }
   return (
      <S.SearchConteiner>
      {/* <h2 className='App-h2'>Поиск юзеров</h2> */}
         <S.Input type="text" placeholder="введите имя юзера" value={username} onChange={onChangeHandler}/>
         <S.Button onClick={searchHeandler} disabled={isLoading}>{isLoading ? "Идёт поиск" : "Найти"}</S.Button>
      </S.SearchConteiner>
   )
}

export default SearchBox