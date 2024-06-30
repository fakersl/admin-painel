import { IProduct } from "@/app/admin/dashboard/page";
import productSlice, { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropsType {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>
    setUpdateTable: Dispatch<SetStateAction<boolean>>
    produto: IProduct
}

const ProdutoRow = ({ srNo, setOpenPopup, setUpdateTable, produto }: PropsType) => {

    const dispatch = useAppDispatch()

    const onEdit = () => {
        dispatch(setProduct(produto));
        setOpenPopup(true);
    }

    const onDelete = () => {
        /* dps faco preguiça tmnc */
    }

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
                    src={produto.nome}
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

export default ProdutoRow
