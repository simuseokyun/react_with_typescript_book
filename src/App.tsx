import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: calc(100%-40px);
  margin-bottom: 20px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
