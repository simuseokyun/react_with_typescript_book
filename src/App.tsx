import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { Header } from "components/Header";
import { BlogPost } from "components/BlogPost";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eeeeee;
  overflow: scroll;
`;

function App() {
  return (
    <Container>
      <Header />
      <BlogPost />
    </Container>
  );
}

export default App;
