import React from 'react';
import * as S from "./PaginationStyled";

function PaginationBox() {
   return (
      <S.PaginationBox>
         <S.PaginationButton>1</S.PaginationButton>
         <S.PaginationButton>2</S.PaginationButton>
         <S.PaginationButton>3</S.PaginationButton>
         <S.PaginationButton>4</S.PaginationButton>
         <S.PaginationButton>5</S.PaginationButton>
      </S.PaginationBox>
   )
}

export default PaginationBox