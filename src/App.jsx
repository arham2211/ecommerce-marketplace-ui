import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Product from "./routes/Product";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import ProductDetails from './routes/ProductDetails';
import Header from "./components/Header";
import "./components/Header.css";
import NavBar from "./components/NavBar";
import "./components/NavBar.css";
import Footer from "./components/Footer";
import "./components/Footer.css";
import Subscribe from "./components/Subscribe";
import "./components/Subscribe.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
        <Subscribe />
        <Footer />
      </Router>
    </>
  );
}

export default App;
