import React from 'react';
import {
    AiFillStar,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import toast from "react-hot-toast";
import { useAppDispatch } from '@/redux/hooks';
import { adicionarAoCarrinho } from "@/redux/features/cartSlice";

interface PropsType {
    id: string;
    img: string;
    categoria: string;
    titulo: string;
    preco: number;
}

const ProductCard: React.FC<PropsType> = ({ id, img, categoria, titulo, preco }) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payload = {
            id,
            img,
            titulo,
            preco,
            quantidade: 1,
        };

        dispatch(adicionarAoCarrinho(payload));
        toast.success("Adicionado ao Carrinho");
    };

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="text-center border-b border-gray-200">
                <img className="inline-block w-full" src={img} alt={titulo} />
            </div>
            <div className="px-8 py-4">
                <p className="text-gray-500 text-sm font-medium">{categoria}</p>
                <h2 className="font-medium">{titulo}</h2>
            </div>
            <div className="mt-3 flex text-[#FFB21D] items-center">
                {[...Array(5)].map((_, index) => (
                    <AiFillStar key={index} />
                ))}
            </div>
            <div className="flex justify-between items-center mt-4 px-8">
                <h2 className="font-medium text-accent text-xl">${preco.toFixed(2)}</h2>
                <div
                    className="flex gap-2 items-center bg-pink-500 text-white px-4 py-2 cursor-pointer hover:bg-pink-600"
                    onClick={addProductToCart}
                >
                    <AiOutlineShoppingCart /> Adicionar ao Carrinho
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
