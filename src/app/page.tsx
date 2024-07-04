"use client";
import Cart from "@/components/front-end/Cart";
import Navbar from "@/components/front-end/Navbar";
import React, { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  return <main>
    <Navbar setShowCart={setShowCart} />
    <Cart setShowCart={setShowCart} />
  </main>
};

export default Home;