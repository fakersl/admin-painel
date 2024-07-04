import React, { Dispatch, SetStateAction } from "react";

import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IProduct } from "@/app/admin/dashboard/page";
import { useAppDispatch } from "@/redux/hooks";
import { setProduct } from "@/redux/features/productSlice";
import axios from "axios";
import { setLoading } from "@/redux/features/loadingSlice";
import { makeToast } from "@/utils/helper";

interface PropsType {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    produto: IProduct;
}

const ProdutoRow = ({
    srNo,
    setOpenPopup,
    setUpdateTable,
    produto,
}: PropsType) => {
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(produto));
        setOpenPopup(true);
    }

    const onDelete = () => {
        dispatch(setLoading(true));

        const payload = {
            fileKey: produto.fileKey,
        };

        axios
            .delete("/api/uploadthing", { data: payload })
            .then((res) => {
                console.log(res);

                axios
                    .delete(`/api/delete_product/${produto._id}`)
                    .then((res) => {
                        console.log(res);
                        makeToast("Produto deletado com sucesso!");
                        setUpdateTable((prevState) => !prevState);
                    })
                    .catch((err) => console.error(err))
                    .finally(() => dispatch(setLoading(false)));
            })
            .catch((err) => console.log(err));

    };

    return (
        <tr>
            <td>
                <div>{srNo}</div>
            </td>
            <td>
                <div>{produto.nome}</div>
            </td>
            <td>$ {produto.preco}</td>
            <td className="py-2">
                <img
                    src={produto.imgSrc}
                    width={40}
                    height={40}
                    alt="product_image"
                />
            </td>
            <td>
                <div className="text-2xl flex items-center gap-2 text-gray-600">
                    <CiEdit
                        className="cursor-pointer hover:text-black"
                        onClick={onEdit}
                    />
                    <RiDeleteBin5Line
                        className="text-[20px] cursor-pointer hover:text-purple-600"
                        onClick={onDelete}
                    />
                </div>
            </td>
        </tr>
    );
};

export default ProdutoRow;
