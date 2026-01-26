import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="notfound" element={<NotFound/>}/>
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
            <Route path="/services" element={<Services/>}/>
            <Route path="/checkout" element={<Checkout/>}/> 
            <Route path="/servicedetails" element={<ServiceDetails/>}/>
            <Route path="portfoliodetails" element={<Portfoliodetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
