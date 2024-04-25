import "./App.css";
import Navbar from "./comonents/Navbar";
import HomePage from "./pages/HomePage";
import BoardPage from "./pages/BoardPage";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";

import { Routes, Route } from "react-router-dom";
import Footer from "./comonents/Footer";

function App() {
  return (
    <div className="App"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
