import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { HeaderStore } from "./components/HeaderStore"; 
import { useState } from "react";

export default function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    //React Fragment
    <>
      <HeaderStore cart={cart} />
      <ProductList addToCart={addToCart} />
    </>
  );
}