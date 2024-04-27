import React, { useEffect } from 'react';
import * as S from "./UserListStyled";
import {  useSelector } from 'react-redux';

 function UserList() {
   const users = useSelector((state) => state.users.setUsers)
   
   useEffect(() => {
      console.log(users);
   }, [users])
 
   return (
      <S.UserListConteiner>
         {users?.map((user, index) => {
           return <S.UserItem key={index}>
            Данные пользователя {user.login} 
         </S.UserItem>
         })}
      </S.UserListConteiner>
   )
}

export default UserList