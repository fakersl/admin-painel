import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IProduct {
    id: string;
    titulo: string;
    img: string;
    preco: number;
    quantidade: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        adicionarAoCarrinho: (state, action: PayloadAction<IProduct>) => {
            const existingProductIndex = state.findIndex((pro) => pro.id === action.payload.id);

            if (existingProductIndex === -1) {
                state.push(action.payload);
            } else {
                state[existingProductIndex].quantidade += 1;
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            return state.filter((item) => item.id !== action.payload);
        }
    },
});

export const { adicionarAoCarrinho, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;