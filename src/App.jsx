import { Navigate, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import CountryInfo from './components/CountryInfo/CountryInfo';
const Home = lazy(() => import('./pages/Home'));
const SearchCountry = lazy(() => import('./pages/SearchCountry'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country" element={<SearchCountry />}></Route>
          <Route path="/country/:countryId" element={<Country />}></Route>
          <Route path="/country/:countryName" element={<CountryInfo />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
