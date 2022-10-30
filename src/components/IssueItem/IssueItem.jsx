import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/detail/${el.number}`);
      }}
    >
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
        <div>{`코멘트 : ${el.comments}`}</div>
      </ItemRight>
    </Container>
  );
});

export default IssueItem;
