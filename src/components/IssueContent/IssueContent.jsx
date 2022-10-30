import React from 'react';
import { useLocation } from 'react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from './Style';

const IssueContent = () => {
  const location = useLocation();
  const { issue } = location.state;

  return (
    <Container>
      <ReactMarkdown remarkPlugins={remarkGfm}>{issue.body}</ReactMarkdown>
    </Container>
  );
};

export default IssueContent;
