import { connectMongoDB } from "@/libs/models/MongoConnect";
import Produto from "@/libs/models/Produto";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;

        console.log('ID recebido:', id);

        // Conectar ao MongoDB
        await connectMongoDB();
        
        // Tentar encontrar o produto antes de deletar
        const produto = await Produto.findById(id);
        if (!produto) {
            console.log('Produto não encontrado com o ID:', id);
            return NextResponse.json({ msg: "Produto não encontrado!" }, { status: 404 });
        }

        // Deletar o produto
        await Produto.findByIdAndDelete(id);

        // Verificar se foi realmente deletado
        const deletedProduto = await Produto.findById(id);
        if (deletedProduto) {
            console.log('Falha ao deletar o produto com o ID:', id);
            return NextResponse.json({ msg: "Falha ao deletar o produto!" }, { status: 500 });
        }

        return NextResponse.json({ msg: "Deletado com Sucesso!" });
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        return NextResponse.json(
            {
                error,
                msg: "Algo deu errado!"
            },
            { status: 400 }
        );
    }
}
