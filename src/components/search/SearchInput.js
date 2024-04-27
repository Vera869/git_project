import React, { useState } from 'react';
import * as S from "./SearchInputStyled";

 const SearchBox = () => {

   // const [data, setData] = useState({});
   const [username, setUsername] = useState("");
   const onChangeHandler = e => {
      setUsername(e.target.value);
   }
   return (
      <S.SearchConteiner>
         <S.Input type="text" placeholder="введите имя юзера" value={username} onChange={onChangeHandler}/>
         <S.Button>Найти</S.Button>
      </S.SearchConteiner>
   )
}

export default SearchBox