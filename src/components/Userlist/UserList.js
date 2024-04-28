import React, { useEffect } from 'react';
import * as S from "./UserListStyled";
import {  useSelector } from 'react-redux';

 function UserList() {
   const users = useSelector((state) => state.users.users);
   const isLoading = useSelector((state) => state.users.isLoading)
   useEffect(() => {
      console.log(users);
   }, [users])
   if(users.length == 0) {
      return <S.UsersLoading>Мы пока не нашли ни одного пользователя</S.UsersLoading>
   }else {return (<>
      {isLoading ? <S.UsersLoading>Идёт поиск, пожалуйста, подождите</S.UsersLoading> :
      (<S.UserListConteiner>
          {users?.map((user, index) => {
             //console.log(user);
            return <S.UserItem key={index}>
               <S.UserImg src={user.avatar_url} alt="avatar"></S.UserImg>
               <S.UserLogin>{user.login}</S.UserLogin>
               <S.UserInfo>Просмотреть основную информацию</S.UserInfo>
               <S.UserGit to={user.html_url} >Просмотреть в GitHub</S.UserGit>
            </S.UserItem>
          })}
      </S.UserListConteiner>)}
      </>
   )}
}

export default UserList