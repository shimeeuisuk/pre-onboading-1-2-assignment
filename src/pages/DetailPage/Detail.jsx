import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import IssueContent from '../../components/IssueContent/IssueContent';
import IssueItem from '../../components/IssueItem/IssueItem';
import { GetIssue } from '../../utils/apis/ListApi';

const Detail = () => {
  const [issue, setIssue] = useState({});
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    GetIssue({ id: params.id }).then((data) => {
      setIssue(data);
    });
  }, []);

  return (
    <div>
      {/* <IssueItem el={issue} /> */}
      <IssueContent issue={issue} />
    </div>
  );
};

export default Detail;
