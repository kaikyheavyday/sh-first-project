import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./module/Home";
import Login from "./module/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
