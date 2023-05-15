import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {" "}
      {/* <ScrollToTop />
      <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
