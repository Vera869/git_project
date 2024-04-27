import React from 'react';
import * as S from "./HeaderStyled";
import {ReactComponent as Logo} from './icons/logo.svg'

function HeaderBox() {
   return (
       <S.AppHeader>
        <Logo />
        <S.HeaderH1>GitSearch облегчает ваш поиск в GitHub</S.HeaderH1>
       </S.AppHeader>
)}

export default HeaderBox


