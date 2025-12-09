import {type FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
     <MouseTrail />
    </>
  );
};

export default Layout;
