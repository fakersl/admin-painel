import { removeFromCart } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react';
import { RxCross1 } from "react-icons/rx";

interface propsType {
    id: string;
    img: string;
    title: string;
    preco: number;
    quantidade: number;
}

const CartProduct: React.FC<propsType> = ({
    id,
    img,
    title,
    preco,
    quantidade,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[80px]" src={img} alt={title} />
                <div className="space-y-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-gray-600 text-[14px]">
                        {quantidade} x ${preco}.00
                    </p>
                </div>
            </div>

            <RxCross1
                className="cursor-pointer"
                onClick={() => dispatch(removeFromCart(id))}
            />
        </div>
    );
};

export default CartProduct;