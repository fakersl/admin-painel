"use client";
import Cart from "@/components/front-end/Cart";
import Navbar from "@/components/front-end/Navbar";
import NavbarMobile from "@/components/front-end/NavbarMobile";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [showCart, setShowCart] = useState(false);

  //media query pra verificar o tamanho da tela
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <main>
      {/* Renderizar a navbar normal se n for mobile */}
      {!isMobile && <Navbar setShowCart={setShowCart} />}

      {/* Renderizar a navbarMobile se for mobile */}
      {isMobile && <NavbarMobile setShowCart={setShowCart} />}

      {/* Renderizar o carrinho se showCart for true */}
      {showCart && <Cart setShowCart={setShowCart} />}
    </main>
  );
};

export default Home;