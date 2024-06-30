"use client";
import Popup from "@/components/admin-panel/Popup";
import ProdutoRow from "@/components/admin-panel/ProdutoRow";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IProduct {
    _id: string;
    imgSrc: string;
    fileKey: string;
    nome: string;
    preco: string;
    categoria: string;
}

const Dashboard = () => {

    const [produtos, setProdutos] = useState<IProduct[]>([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        axios
            .get("/api/get_products")
            .then((res) => setProdutos(res.data))
            .catch(err => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    }, [updateTable, dispatch]);

    return (
        <div>
            <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
                <h2 className="text-3xl">Todos os produtos</h2>

                <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-500 border-t border-[#ececec]">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Produto</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto, index) => (
                                <ProdutoRow
                                    key={produto._id}
                                    srNo={index + 1}
                                    setOpenPopup={setOpenPopup}
                                    setUpdateTable={setUpdateTable}
                                    produto={produto} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            { openPopup && (
                <Popup setOpenPopup={setOpenPopup} setUpdateTable={setUpdateTable} />
            )}
        </div>
    );
};

export default Dashboard;