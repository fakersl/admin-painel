import { Schema, model, models} from "mongoose";

const productSchema = new Schema({
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

const Product = models.Product || model("Product", productSchema);

export default Product;
