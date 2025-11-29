import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from "./styles/global.module.css";
import Search from "./pages/Search/Search";
import NavBar from "./features/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
