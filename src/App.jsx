import React from 'react';
import { ListProvider } from './context/ListContext';
import Router from './Router';

const App = () => {
  return (
    <ListProvider>
      <Router />
    </ListProvider>
  );
};

export default App;
