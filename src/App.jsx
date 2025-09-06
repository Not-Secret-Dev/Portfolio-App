import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Global/Sidebar";
import styled from "styled-components";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
