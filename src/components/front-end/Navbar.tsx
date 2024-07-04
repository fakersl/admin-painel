import { useAppSelector } from '@/redux/hooks'
import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({ setShowCart }: PropsType) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)
    return (
        <div className="pt-4 bg-white top-0 sticky shadow-md z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="hidden lg:flex w-full max-w-md mx-4">
                        <input
                            className="border-2 border-accent px-4 py-2 w-full rounded-l-lg focus:outline-none"
                            type="text"
                            placeholder="Pesquisar..."
                        />

                        <button className="bg-accent text-white px-4 rounded-r-lg">
                            <BsSearch className="text-2xl" />
                        </button>
                    </div>

                    <div className="flex gap-4 md:gap-8 items-center">
                        <div className="md:flex hidden gap-3 items-center">
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 p-1">
                                <AiOutlineUser className="text-2xl" />
                            </div>

                            <div>
                                <p className="text-gray-500">Entre ou</p>
                                <p className="font-medium">registre-se</p>
                            </div>
                        </div>


                        <div className="relative cursor-pointer text-gray-500 p-1"
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineShoppingCart className="text-3xl" />

                            <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 pt-4" />
            </div>
        </div>
    );
};

export default Navbar;