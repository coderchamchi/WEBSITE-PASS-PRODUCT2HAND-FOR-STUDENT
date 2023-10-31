import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./JewelryLogin/Login";
import HomePage from "./JewelryHomePage/HomePage";
import Product from "./JewelryProduct/Product";
import ProductDetails from "./JewelryProductDeTails/ProductDetails";
import Info from "./JewelryInfo/Info";
import Contact from "./JewelryContact/Contact";
import { useEffect, useRef, useState } from "react";
import BuyNow from "./JewelryBuyNow/BuyNow";
import Register from "./JewelryRegister/Register";
import Header from "./HeaderJewelry";
import Help from "./Help/Help"

function App() {
  const [username, setUserName] = useState("");

  const storedUsername = localStorage.getItem("username");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage username={username} />} />
        <Route path="/product" element={<Product username={username} />} />
        <Route path="/help" element={<Help username={username} />} />
        <Route
          path="/product-detail"
          element={
            <ProductDetails
              storedUsername={storedUsername}
              username={username}
            />
          }
        />
        <Route path="/BuyNow" element={<BuyNow username={username} />} />
        <Route path="/information" element={<Info username={username} />} />
        <Route path="/contact" element={<Contact username={username} />} />
      </Routes>
    </>
  );
}

export default App;
