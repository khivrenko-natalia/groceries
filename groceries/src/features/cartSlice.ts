import { createSlice } from '@reduxjs/toolkit';
import CartItem from '../models/CartItem';
import { ProductDTO } from '../models/ProductDTO';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as CartItem[],
        opened: false,
    },
    reducers: {
        toggleCart: (state, action) => {
            state.opened = !state.opened;
        },
        addProduct: (state, action) => {
            const id = action.payload?.productId?.value;
            const item = state.items
                .find(item => item.product.productId?.value === id);
            if (item) {
                item.quantity++;
            } else {
                state.items.push({product: action.payload, quantity: 1});
            }
        },
        subtractProduct: (state, action) => {
            const id = action.payload?.productId?.value;
            const item = state.items
                .find(item => item.product.productId?.value === id);
            if (!item) return;
            if (item?.quantity === 1) {
                state.items = state.items.filter(i => i !== item);
            } else {
                item.quantity--;
            }
        },
        removeProduct: (state, action) => {
            const productId = (action.payload as ProductDTO).productId.value;
            state.items = state.items.filter(item => item.product.productId.value !== productId);
        },
    },
});

export const { toggleCart, addProduct, subtractProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;