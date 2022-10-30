import React, { useContext, useRef, useEffect } from 'react';
import { ListContext } from '../../context/ListContext';
import IssueItem from '../IssueItem/IssueItem';

const IssueList = () => {
  const elementRef = useRef(null);
  const context = useContext(ListContext);
  const issueList = context.list;
  const { changePage } = context;

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        changePage();
      }
    });
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [issueList]);

  return (
    <ul>
      {issueList.map((el, idx) => {
        return (
          <>
            <IssueItem
              el={el}
              key={el.id}
              ref={idx === issueList.length - 5 ? elementRef : undefined}
            />
            {idx === 4 ? (
              <a href="https://www.wanted.co.kr/ ">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                  alt="img"
                />
              </a>
            ) : undefined}
          </>
        );
      })}
    </ul>
  );
};

export default IssueList;
