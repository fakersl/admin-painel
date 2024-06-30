import { connectMongoDB } from "@/libs/models/MongoConnect";
import Produto from "@/libs/models/Produto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {

        const body = await request.json()
        const { imgSrc, fileKey, nome, categoria, preco } = body;

        await connectMongoDB()

        const data = await Produto.create({
            imgSrc, fileKey, nome, categoria, preco
        });

        return NextResponse.json({msg: "✔ | Produto criado com sucesso", data});
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Algo deu errado!"
        }, { status: 400 })
    }
}