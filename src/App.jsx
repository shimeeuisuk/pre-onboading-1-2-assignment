import React from 'react';
import { ListProvider } from './context/ListContext';
import Router from './Router';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <ListProvider>
      <Layout>
        <Router />
      </Layout>
    </ListProvider>
  );
};

export default App;
