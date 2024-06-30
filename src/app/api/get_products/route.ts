import { connectMongoDB } from "@/libs/models/MongoConnect";
import Produto from "@/libs/models/Produto";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectMongoDB()

        const data = await Produto.find()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Algo deu errado!"
        }, {status: 400})
    }
}