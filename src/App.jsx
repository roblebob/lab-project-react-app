import "./App.css";
import Navbar from "./comonents/Navbar";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
