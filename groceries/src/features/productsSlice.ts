import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProductDTO } from '../models/ProductDTO';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('/data/products.json');
    const data = await response.json();
    return data;
  })

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [] as ProductDTO[],
    },
    reducers: {
        update: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    }
});

export const { update } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;