import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface PropsType {
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setOpenPopup, setUpdateTable }: PropsType) => {

    const productData = useAppSelector((state) => state.productReducer)
    const dispatch = useAppDispatch()

    const [inputData, setInputData] = useState({
        nome: productData.nome,
        categoria: productData.categoria,
        preco: productData.preco
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(setLoading(true))

        axios.put(`/api/edit_product/${productData._id}`, inputData).then(res => {
            makeToast("Produto atualizado com sucesso! 😉")
            setUpdateTable((prevState) => !prevState)
        }).catch(err => console.log(err)
        ).finally(() => {
            dispatch(setLoading(false))
            setOpenPopup(false);
        });
    };
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-[00000070] grid place-items-center">
            <div className="bg-white w-[700px] py-8 rounded.lg text-center relative">
                <IoIosCloseCircleOutline
                    className="absolute text-2xl right-0 top-0 m- cursor-pointer hover:text-purple-600"
                    onClick={() => setOpenPopup(false)}
                />

                <h2 className="text-2xl -mt-3">Editar Produto</h2>

                <form className="mt-6 w-fit space-y-4 mx-auto" onSubmit={handleSubmit}>
                    <input
                        className="border block border-gray-600 outline-none px-4 py-2 rounded-lg w-fit"
                        type="text"
                        placeholder="Nome"
                        value={inputData.nome}
                        onChange={(e) =>
                            setInputData({ ...inputData, nome: e.target.value })
                        }
                        required
                    />
                    <input
                        className="border block border-gray-600 outline-none px-4 py-2 rounded-lg w-fit"
                        type="text"
                        placeholder="Categoria"
                        value={inputData.categoria}
                        onChange={(e) =>
                            setInputData({ ...inputData, categoria: e.target.value })
                        }
                        required
                    />
                    <input
                        className="border block border-gray-600 outline-none px-4 py-2 rounded-lg w-fit"
                        type="text"
                        placeholder="Preço"
                        value={inputData.preco}
                        onChange={(e) =>
                            setInputData({ ...inputData, preco: e.target.value })
                        }
                        required
                    />
                    <div className="flex justify-end">
                        <button className="bg-accent block text-white px-8 py-2 rounded-lg self-center">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Popup;