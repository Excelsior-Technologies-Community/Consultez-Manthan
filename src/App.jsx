import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Testi from "./Pages/Testi";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Faqs from "./Pages/Faqs";
import TeamList from "./Pages/TeamList";
import TeamDetails from "./Pages/TeamDetails";
import Portfolio from "./Pages/Portfolio";
import Products from "./Pages/Products";
import ProductSidebar from "./Pages/ProductSidebar";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Services from "./Pages/Services";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";
import ServiceDetails from "./Pages/ServiceDetails";
import Portfoliodetails from "./Pages/Portfoliodetails";
import NewsGrid from "./Pages/NewsGrid";
import NewsDetails from "./Pages/NewsDetails";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Wishlist from "./Pages/Wishlist ";
import ScrollToTop from "./Components/ScrollToTop.jsx";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#0b3231",
            color: "#fff",
            borderLeft: "6px solid #c6d936",
            padding: "16px",
            borderRadius: "5px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
            fontSize: "15px",
            fontWeight: "500",
            maxWidth: "400px",
          },
          iconTheme: {
            primary: "#c6d936",
            secondary: "#0b3231",
          },
        }}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Layout />}>
            <Route path="/testi" element={<Testi />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/teamlist" element={<TeamList />} />
            <Route path="/teamdetails" element={<TeamDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productsidebar" element={<ProductSidebar />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/servicedetails" element={<ServiceDetails />} />
            <Route path="portfoliodetails" element={<Portfoliodetails />} />
            <Route path="newsgrid" element={<NewsGrid />} />
            <Route path="/newsdetails" element={<NewsDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
