// 1 - config reactRouter
import * as React from "react";
import { Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";


//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Info from "./pages/Info";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

//components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
        <Navbar />
        {/* 2 - links com react router  */}
        {/*  */}
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />}/>
          {/* 4 - rota dinamica */}
          <Route path="/products/:id" element={<Product />}/>
          {/* 9 - search */}
          <Route path="/search" element={<Search />}/>
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          <Route path="*" element={<NotFound />} />
          {/* 7- no match route */}
        </Routes>
    </div>
  );
}

export default App;
