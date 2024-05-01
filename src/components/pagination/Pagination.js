import React from 'react';
import * as S from "./PaginationStyled";
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setPage, setUsers } from '../../store/usersSlice';
import { searchUsers } from '../../Api';

function PaginationBox() {
   const dispatch = useDispatch();
   const username = useSelector((state) => state.users.username);
   const order = useSelector((state) => state.users.order);
   const perPage = useSelector((state) => state.users.perPage);
   const totalCount = useSelector((state) => state.users.totalCount);
   const currentPage = useSelector((state) => state.users.page);
   const currentNumPages = Math.round(totalCount / perPage);
   const pageNumbers = [];

   if(currentNumPages > 10) {
      if(currentPage > 5) {
         for(let i = currentPage-4; i <= currentPage+5; i++){
            pageNumbers.push(i);
            if(i == currentNumPages) break;
         }
      } else {
         for(let i=1; i <= 10; i++){
            pageNumbers.push(i);
            if(i == currentNumPages) break;
         }
      }
   }else {
      for(let i=1; i <= currentNumPages; i++){
         pageNumbers.push(i);
      }
   }
   
   console.log(currentNumPages);
   const changePage = (page) => {
      dispatch(setIsLoading(true));
      searchUsers(username, order, perPage, page).then(data => {
         console.log(data);
         dispatch(setUsers(data.items));
         dispatch(setIsLoading(false));
      });
   }
   return (
      <S.PaginationBox>
         {pageNumbers.map((number) => (
            <S.PaginationButton key={number}  onClick={() =>{
               dispatch(setPage(number));
               changePage(number)}}>{number}</S.PaginationButton>
         ))}
      </S.PaginationBox>
   )
}

export default PaginationBox