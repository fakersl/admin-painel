import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Produto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { imgSrc, fileKey, nome, categoria, preco } = body;


        await connectMongoDB();

        const data = await Product.create({
            imgSrc, fileKey, nome, categoria, preco
        });

        return NextResponse.json({msg: "Produto adicionado com sucesso", data});
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Algo deu errado",
            },
            { status: 400 }
        );
    }
}