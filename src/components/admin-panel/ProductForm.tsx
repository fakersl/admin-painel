"use client"
import { setLoading } from '@/redux/features/loadingSlice';
import { useAppDispatch } from '@/redux/hooks';
import { makeToast } from '@/utils/helper';
import { UploadButton } from '@/utils/uploadthings';
import axios from 'axios';
import Image from 'next/image';
import React, { FormEvent, useState } from "react";

interface IPayload {
    imgSrc: null | string;
    fileKey: null | string;
    nome: string;
    categoria: string;
    preco: string;
}

const ProductForm = () => {
    const [payload, setPayload] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        nome: "",
        categoria: "",
        preco: "",
    });

    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(setLoading(true));

        axios
            .post("/api/add_product", payload)
            .then((res) => {
                makeToast("Produto adicionado com sucesso");
                setPayload({
                    imgSrc: null,
                    fileKey: null,
                    nome: "",
                    categoria: "",
                    preco: "",
                });
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Image className="max-h-[300px] w-auto object-contain rounded-md" src={payload.imgSrc ?
                payload.imgSrc : "/placeholder.svg"}
                width={800}
                height={500}
                alt="product_image"
            />

            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log(res);

                    setPayload({
                        ...payload,
                        imgSrc: res[0]?.url,
                        fileKey: res[0]?.key,
                    });
                }}
                onUploadError={(error: Error) => {
                    console.log(`ERROR! ${error}`);
                }}
            />

            <div>
                <label className="block ml-1">Nome do produto</label>
                <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.nome}
                    onChange={(e) => setPayload({ ...payload, nome: e.target.value })}
                    required
                />
            </div>
            <div>
                <label className="block ml-1">Categoria do produto</label>
                <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.categoria}
                    onChange={(e) => setPayload({ ...payload, categoria: e.target.value })}
                    required
                />
            </div>
            <div>
                <label className="block ml-1">Preco do produto</label>
                <input className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.preco}
                    onChange={(e) => setPayload({ ...payload, preco: e.target.value })}
                    required
                />
            </div>

            <div className="flex justify-end">
                <button className="bg-pink text-white px-8 py-2 rounded-md">Adicionar</button>
            </div>

        </form>
    );
};

export default ProductForm;