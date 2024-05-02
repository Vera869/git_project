import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFoundPage';
import { LayoutPage } from './pages/LayoutPage';
import Main from './pages/MainePage';

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<LayoutPage />}>
         <Route path="*" element={<NotFound />} />
         <Route path="/" element={<Main />}/>
         </Route>
      </Routes>)
}