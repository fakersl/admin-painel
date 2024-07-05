import React from 'react';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat mt-4"
      style={{
        backgroundImage: 'url(/hero.png)',
        minHeight: '400px', // Altura mínima para garantir que o conteúdo seja visível
      }}
    >
      <div className="container grid md:grid-cols-2 py-8">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4 text-white">
            <p className="text-white">
              Iniciando em <span className="font-bold">R$ 0,00</span>
            </p>

            <h1 className="text-white font-bold text-4xl md:text-5xl">
              As melhores peças e os melhores sneakers! | 2024
            </h1>

            <h3 className="text-2xl font-['Oregano', cursive]">
              Ofertas Exclusivas <span className="text-red-600">-15%</span> OFF!
            </h3>

            <a
              className="inline-block bg-black text-white hover:bg-accent rounded-md px-6 py-3 "
              href="#"
            >
              Comprar agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
