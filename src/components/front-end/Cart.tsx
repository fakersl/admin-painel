import { useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction } from 'react';
import { RxCross1 } from 'react-icons/rx';
import CartProduct from './CartProduct';

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const Cart = ({ setShowCart }: PropsType) => {
    const products = useAppSelector((state) => state.cartReducer);

    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total = total + item.preco * item.quantidade));
        return total;
    };

    return (
        <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
            <div className="max-w-[90vw] md:max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
                <RxCross1
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                    onClick={() => setShowCart(false)}
                />
                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
                    Seu Carrinho
                </h3>

                <div className="mt-6 space-y-4">
                    {products.map((item: any) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            preco={item.preco}
                            quantidade={item.quantidade}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center font-medium text-xl py-4">
                    <p>Total:</p>
                    <p className="text-green-600">R${getTotal()}.00</p>
                </div>

                <button className="bg-black text-white text-center w-full rounded-full py-3 hover:bg-accent mb-4">
                    Ver Carrinho
                </button>
                <button className="bg-black text-white text-center w-full rounded-full py-3 hover:bg-accent">
                    Realizar Pagamento
                </button>
            </div>
        </div>
    );
};

export default Cart;
