import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/productsSlice';
import categoryReducer from './features/categorySlice';
import cartReducer from './features/cartSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        cart: cartReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;