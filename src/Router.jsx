import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/DetailPage/Detail';
import Home from './pages/HomePage/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
