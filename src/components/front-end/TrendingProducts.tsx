import React, { useEffect, useState } from "react";
import ProductCard from "./CartProduct"; // Verifique o caminho para o componente ProductCard
import axios from "axios";

interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    nome: string;
    categoria: string;
    preco: number;
}

const TrendingProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios
            .get("/api/get_products")
            .then((res) => {
                console.log(res.data); // Verifique os dados recebidos no console
                setProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container mt-32">
            <div className="sm:flex justify-between items-center">
                <h2 className="text-4xl font-medium">Produtos em Alta</h2>
                <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                    <div className="text-black">Novo</div>
                    <div>Em Destaque</div>
                    <div>Mais Vendidos</div>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
                {products.map((item: IProduct) => (
                    <ProductCard
                        key={item._id}
                        id={item._id}
                        img={item.imgSrc}
                        category={item.categoria} // Corrigi para "category" conforme definido em ProductCard
                        titulo={item.nome} // Corrigi para "titulo" conforme definido em ProductCard
                        preco={item.preco}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
