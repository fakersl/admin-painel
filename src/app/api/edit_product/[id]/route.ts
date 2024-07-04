import { connectMongoDB } from "@/libs/models/MongoConnect";
import Produto from "@/libs/models/Produto";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
    try {
        const body = await request.json()
        const id = URLParams.params.id
        const { nome, categoria, preco } = body;

        await connectMongoDB();

        console.log(id, nome, categoria, preco);

        const data = await Produto.findByIdAndUpdate(id, {
            nome,
            categoria,
            preco,
        });

        return NextResponse.json({ msg: "Atualizado com Sucesso!", data });
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Algo deu errado!"
        }, { status: 400 })
    }
}