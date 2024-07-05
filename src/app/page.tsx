"use client";
import Footer from "@/components/front-end/Footer";
import Banner from "@/components/front-end/Banner";
import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import NavbarMobile from "@/components/front-end/NavbarMobile";
import TrendingProducts from "@/components/front-end/TrendingProducts";
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

      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
      <Footer />
    </main>
  );
};

export default Home;