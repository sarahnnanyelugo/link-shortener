import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      {/* <ScrollToTop />
      <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      
       
      <Footer />
    </>
  );
}

export default App;
