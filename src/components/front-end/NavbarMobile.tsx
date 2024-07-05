import { useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}

const NavbarMobile: React.FC<PropsType> = ({ setShowCart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartCount = useAppSelector((state) => state.cartReducer.length);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="pt-4 bg-white top-0 sticky shadow-md z-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Logo</div>

                    {/* Ícone do menu para telas menores */}
                    <div className="block lg:hidden">
                        <button
                            className="text-gray-600"
                            onClick={handleMenuToggle}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Campo de pesquisa */}
                    <div className="hidden lg:flex w-full max-w-md mx-4">
                        <input
                            className="border-2 hover:border-accent border-black px-4 py-2 w-full rounded-l-lg focus:outline-none"
                            type="text"
                            placeholder="Pesquisar..."
                        />
                        <button className="hover:bg-accent bg-black text-white px-4 rounded-r-lg">
                            <BsSearch className="text-2xl" />
                        </button>
                    </div>

                    {/* Componentes da navbar para telas menores */}
                    <NavbarMobileContent setShowCart={setShowCart} isMenuOpen={isMenuOpen} />
                </div>

                <div className="border-b border-gray-200 pt-4" />
            </div>
        </div>
    );
};

interface NavbarMobileContentProps {
    setShowCart: Dispatch<SetStateAction<boolean>>;
    isMenuOpen: boolean;
}

const NavbarMobileContent: React.FC<NavbarMobileContentProps> = ({ setShowCart, isMenuOpen }) => {
    const cartCount = useAppSelector((state) => state.cartReducer.length);

    return (
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                    <div className="rounded-full border-2 border-gray-300 text-gray-500 p-1">
                        <AiOutlineUser className="text-2xl" />
                    </div>
                    <div>
                        <p className="text-gray-500">Entre ou</p>
                        <p className="font-medium">registre-se</p>
                    </div>
                </div>

                <div className="relative cursor-pointer text-gray-500 p-1" onClick={() => setShowCart(true)}>
                    <AiOutlineShoppingCart className="text-3xl" />

                    <div className="absolute top-[-10px] right-[-10px] bg-red-600 w-6 h-6 rounded-full text-white text-xs flex items-center justify-center">
                        {cartCount}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarMobile;
