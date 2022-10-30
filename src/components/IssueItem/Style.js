import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`;

const ItemLeft = styled.div`
  border: 1px solid blue;
`;
const ItemRight = styled.div`
  border: 1px solid green;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-right: 0.2rem;
`;
// eslint-disable-next-line object-curly-newline
export { Container, ItemLeft, ItemRight, Title, SubTitle, Content };
