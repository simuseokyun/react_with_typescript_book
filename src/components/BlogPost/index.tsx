import styled from "@emotion/styled";
const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow:
    10px 10px 30px #d9d9d9,
    -10px -10px 30px #ffffff;
  max-width: 800px;
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BlogPost = () => {
  return (
    <Container>
      <Title>
        sunt aut facere repellat provident occaecati excepturi optio
        reprehenderit
      </Title>
      <Body>
        quia et suscipit\nsuscipit recusandae consequuntur expedita et
        cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
        sunt rem eveniet architecto
      </Body>
    </Container>
  );
};
