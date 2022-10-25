import "./App.css";
import styled from "styled-components";

//컴포넌트
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/itemDetail";

const Container = styled.div`
  background-color: rgb(240, 240, 240);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.header`
  text-align: center;
  width: 100vw;
  top: 0;
  background-color: #4a69bd;
  color: white;
  padding: 20px;

  & > p {
    color: rgb(240, 240, 240);
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <Header>
          <h1>프론트엔드 개발자 사전 과제</h1>
          <p>게시물을 검색해보세요.</p>
          <SearchInput />
        </Header>
        ItemList
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/:type" element={<ItemDetail />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
