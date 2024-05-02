import React, { useEffect, useState } from 'react';
import * as S from "./SearchInputStyled";
import { useDispatch, useSelector } from 'react-redux'
import { searchUsers } from '../../Api';
import { setIsLoading, setIsShowSort, setIsShowUsersNum, setPerPage, setOrder, setUsername, setUsers, setTotalCount } from '../../store/usersSlice';
import { handleLoginChange } from '../../helpers';

 const SearchBox = () => {
   const dispatch = useDispatch();
   const [isLoginError, setLoginError] = useState([]);
   const username = useSelector((state) => state.users.username);
   const isLoading = useSelector((state) => state.users.isLoading);
   const isShowSort = useSelector((state) => state.users.isShowSort);
   const isShowUsersNum = useSelector((state) => state.users.isShowUsersNum);
   const order = useSelector((state) => state.users.order);
   const perPage = useSelector((state) => state.users.perPage);
   const page = useSelector((state) => state.users.page);
   
   useEffect(() => {
      console.log(page);
   }, [page, perPage, order ]);

   const setSortUsersHeandler = (value) => {
      dispatch(setIsShowSort());
      dispatch(setOrder(value));
      console.log(order);
  }

   const setNumUsersHeandler = (value) => {
       dispatch(setIsShowUsersNum());
       dispatch(setPerPage(value));
       console.log(perPage);
   }
   const searchHeandler = () => {
      dispatch(setIsLoading(true));
      searchUsers(username, order, perPage, page).then(data => {
         console.log(data);
         dispatch(setTotalCount(data.total_count));
         dispatch(setUsers(data.items));
         dispatch(setIsLoading(false));
      }).catch(err => console.log(err))
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
            <S.Input type="text" placeholder="введите имя юзера" value={username} 
               onChange={(event) => {
                  handleLoginChange(event, setLoginError);
                  dispatch(setUsername(event.target.value));
                  }}/>
            <S.inputError>{isLoginError}</S.inputError>
            <S.Button onClick={searchHeandler} disabled={isLoading}>{isLoading ? "Идёт поиск" : "Найти"}</S.Button>
         </S.InputBox>
         <S.SortBox>
            <S.SortButton onClick={() => dispatch(setIsShowUsersNum())}>Отображение по колличеству юзеров</S.SortButton>
             {isShowUsersNum ? <S.SortList >
               <S.SortListItem onClick={() => setNumUsersHeandler(1)}>1</S.SortListItem>
               <S.SortListItem onClick={() => setNumUsersHeandler(20)}>20</S.SortListItem>
               <S.SortListItem onClick={() => setNumUsersHeandler(50)}>50</S.SortListItem>
               <S.SortListItem onClick={() => setNumUsersHeandler(100)}>100</S.SortListItem>
            </S.SortList>: ''}
         </S.SortBox>
      </S.SearchConteiner>
      </>
   )
}

export default SearchBox