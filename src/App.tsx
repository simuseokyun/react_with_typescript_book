import './App.css';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { Form } from 'components/Form';
import { BlogPost } from 'components/BlogPost';
import mockPosts from 'mock/posts.json';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eeeeee;
  overflow: scroll;
  position: relative;
`;
const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1000);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
      ))}
      <ButtonContainer>
        <Button
          label="등록"
          color="black"
          onClick={() => {
            setShowForm(true);
          }}
        />
      </ButtonContainer>
      {showForm && (
        <Form
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
    </Container>
  );
}

export default App;
