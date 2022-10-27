import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ItemDetailPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
