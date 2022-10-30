// eslint-disable-next-line object-curly-newline
import React, { createContext, useState, useEffect, useMemo } from 'react';
import GetList from '../utils/apis/ListApi';

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (end) {
      return;
    }

    GetList({ size: 30, page }).then((result) => {
      if (result.length === 0) {
        setEnd(true);
      }
      setList((prev) => [...prev, ...result]);
    });
  }, [page]);

  const changePage = (num) => {
    setPage((prev) => prev + 1);
  };

  const value = useMemo(
    () => ({
      list,
      page,
      setPage,
      changePage,
    }),
    [list, changePage]
  );
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
