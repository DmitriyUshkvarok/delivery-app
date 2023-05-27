import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyleGiFoodTruck, LoaderWrapper } from './App.styled';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const BasketPage = lazy(() => import('../../Pages/BasketPage/BasketPage'));

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <Suspense
        fallback={
          <LoaderWrapper>
            <StyleGiFoodTruck size={350} color="aqua" />
          </LoaderWrapper>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="basket-products" element={<BasketPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
