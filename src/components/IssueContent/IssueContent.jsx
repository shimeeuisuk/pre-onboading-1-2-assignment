import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Container from './Style';

const IssueContent = ({ issue }) => {
  return (
    <Container>
      <ReactMarkdown remarkPlugins={remarkGfm}>{issue.body}</ReactMarkdown>
    </Container>
  );
};

export default IssueContent;
