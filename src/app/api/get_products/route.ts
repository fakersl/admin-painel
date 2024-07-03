import { connectMongoDB } from "@/libs/models/MongoConnect";
import Produto from "@/libs/models/Produto";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB();
        const produtos = await Produto.find({});
        return NextResponse.json(produtos);
    } catch (error) {
        return NextResponse.json(
            { error, msg: "Algo deu errado" },
            { status: 500 }
        );
    }
}
