import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line object-curly-newline
import {
  Container,
  ItemLeft,
  ItemRight,
  SubTitle,
  Title,
  Content,
} from './Style';

// eslint-disable-next-line object-curly-newline
const IssueItem = forwardRef(({ el }, ref) => {
  return (
    <Link to={`/detail/${el.number}`} state={{ issue: el }} ref={ref}>
      <Container>
        <ItemLeft>
          <Title>
            <Content>{`#${el.number}`}</Content>
            <Content>{el.title}</Content>
          </Title>
          <SubTitle>
            <Content>{`작성자 ${el.user.login},`}</Content>
            <Content>{`작성일 ${el.created_at}`}</Content>
          </SubTitle>
        </ItemLeft>
        <ItemRight>
          <div>{el.comments}</div>
        </ItemRight>
      </Container>
    </Link>
  );
});

export default IssueItem;
