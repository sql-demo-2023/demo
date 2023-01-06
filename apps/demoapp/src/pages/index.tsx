import styled from '@emotion/styled';

const Card = styled('div')`
  width: 60%;
  padding: 1rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: #fff8ea;
  text-align: center;
  color: #594545;
`;

export function Index() {
  return (
    <>
      <Card> Demo App </Card>
      <Card> This is the staging env. </Card>
    </>
  );
}

export default Index;
