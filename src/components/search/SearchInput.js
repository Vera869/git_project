import React, { useState } from 'react';
import * as S from "./SearchInputStyled";
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers } from '../../Api';
import { setIsLoading, setIsShowSort, setIsShowUsersNum, setOrder, setPer_page, setUsername, setUsers } from '../../store/usersSlice';

 const SearchBox = () => {
   const dispatch = useDispatch();
   const username = useSelector((state) => state.users.username);
   const isLoading = useSelector((state) => state.users.isLoading);
   const isShowSort = useSelector((state) => state.users.isShowSort);
   const isShowUsersNum = useSelector((state) => state.users.isShowUsersNum);
   const order = useSelector((state) => state.users.order);
   const per_page = useSelector((state) => state.users.per_page);
   // const page = useSelector((state) => state.users.page);
   const page = 3;
   const onChangeHandler = e => {
      dispatch(setUsername(e.target.value));
   }
   const setSortUsersHeandler = (value) => {
      dispatch(setIsShowSort());
      dispatch(setOrder(value));
      console.log(order);
  }
   const setNumUsersHeandler = (value) => {
       dispatch(setIsShowUsersNum());
       dispatch(setPer_page(value));
       console.log(per_page);
   }
   const searchHeandler = () => {
      dispatch(setIsLoading(true));
      searchUsers(username, order, per_page, page).then(data => {
         console.log(data.items);
         dispatch(setUsers(data.items));
         dispatch(setIsLoading(false));
      });
      
   }
   return (<>
      <S.SearchHeader>Поиск юзеров</S.SearchHeader>
      <S.SearchConteiner>
         <S.SortBox>
            <S.SortButton onClick={() => dispatch(setIsShowSort())}>Сортировка по репозиториям:</S.SortButton>
           {isShowSort ? <S.SortList>
               <S.SortListItem onClick={() => setSortUsersHeandler("desc")}>По возрастанию</S.SortListItem>
               <S.SortListItem onClick={() => setSortUsersHeandler("asc")}>По убыванию</S.SortListItem>
            </S.SortList> : ''}
            
         </S.SortBox>
         <S.InputBox>
            <S.Input type="text" placeholder="введите имя юзера" value={username} onChange={onChangeHandler}/>
            <S.Button onClick={searchHeandler} disabled={isLoading}>{isLoading ? "Идёт поиск" : "Найти"}</S.Button>
         </S.InputBox>
         <S.SortBox>
            <S.SortButton onClick={() => dispatch(setIsShowUsersNum())}>Отображение по колличеству юзеров</S.SortButton>
             {isShowUsersNum ? <S.SortList >
               <S.SortListItem onClick={() => setNumUsersHeandler(10)}>10</S.SortListItem>
               <S.SortListItem onClick={() => setNumUsersHeandler(20)}>20</S.SortListItem>
               <S.SortListItem onClick={() => setNumUsersHeandler(30)}>30</S.SortListItem>
            </S.SortList>: ''}
         </S.SortBox>
      </S.SearchConteiner>
      </>
   )
}

export default SearchBox