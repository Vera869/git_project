import React from 'react';
import * as S from "./UserListStyled";

 function UserList() {

   const users =["Inga", "Darya", "Luba"]
   return (
      <S.UserLi>
         {users.map((user, index) => {
            <S.UserItem key={index}>
            Данные пользователя {user}
         </S.UserItem>
         })}
      </S.UserLi>
   )
}

export default UserList