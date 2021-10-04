import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../models/Category';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [] as Category[],
        origin: [
            Category.ALCOHOL,
            Category.BAKERY,
            Category.DAIRY_N_EGGS,
            Category.DRINKS,
            Category.FROZEN,
            Category.HOME_N_HEALTH,
            Category.MEAT_FISH_N_PROTEIN,
            Category.PANTRY,
            Category.PET_PRODUCTS,
            Category.PREPARED,
            Category.PRODUCE,
            Category.SNACKS,
        ],
    },
    reducers: {
        addCategory: (state, action) => {
            state.categories = state.categories.concat([action.payload]);
        },
        removeCategory: (state, action) => {
            state.categories = state.categories
                .filter(category => category !== action.payload);
        },
    },
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;