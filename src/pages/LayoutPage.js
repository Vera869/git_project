import { Outlet } from 'react-router-dom';
import * as S from './PagesStyled';
import HeaderBox from '../components/header/Header';
import PaginationBox from '../components/pagination/Pagination';

export const LayoutPage = () => {
   return (
     <S.App>
      <HeaderBox />
      <Outlet />
      <footer>
       <PaginationBox />
      </footer>
     </S.App>
   )
}

