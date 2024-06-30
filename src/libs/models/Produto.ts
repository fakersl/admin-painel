import { Schema, model, models} from "mongoose";

const produtoSchema = new Schema({
    imgSrc: {
        type: String,
        require: true,
    },
    fileKey: {
        type: String,
        require: true,
    },
    nome: {
        type: String,
        require: true,
    },
    categoria: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        require: true,
    },
});

const Produto = models.Produto || model("Produto", produtoSchema);

export default Produto;