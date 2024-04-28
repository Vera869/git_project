import React, { useEffect } from 'react';
import * as S from "./UserListStyled";
import {  useSelector } from 'react-redux';

 function UserList() {
   const users = useSelector((state) => state.users.users);
   const isLoading = useSelector((state) => state.users.isLoading)
   useEffect(() => {
      console.log(users);
   }, [users])
   return (
      <S.UserListConteiner>
         {users?.map((user, index) => {
            console.log(user);
           return <S.UserItem key={index}>
               {isLoading ? <p>Идёт поиск, пожалуйста, подождите</p> :
         (<>
            <img src={user.avatar_url} 
               alt="avatar"
            />
            <p>{user.login}</p>
            <a src="html_url">Просмотреть профиль пользователя в GitHub</a>
         </>
         )}
         </S.UserItem>
         })}
      </S.UserListConteiner>
   )
}

export default UserList