import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Global/Sidebar";
import styled from "styled-components";
import Home from "./components/Pages/Home";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <Home />
    </MainContainer>
  );
}

export default App;
