import React from 'react';
import Header from '../Header/Header';
import Continer from './Style';

const Layout = ({ children }) => {
  return (
    <Continer>
      <Header />
      {children}
    </Continer>
  );
};

export default Layout;
