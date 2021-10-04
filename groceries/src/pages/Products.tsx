import React from 'react';
import Product from '../components/product/Product';
import store from '../store';
import './Products.scss';
import { Category } from '../models/Category';
import Filter from '../components/filter/Filter';
import CartButton from '../components/cart-button/CartButton';
import CartItem from '../models/CartItem';
import { fetchProducts } from '../features/productsSlice';
import { ProductDTO } from '../models/ProductDTO';

type ProductsPageState = {
    products: ProductDTO[],
    categories: Category[],
    cartItems: CartItem[]
};

class Products extends React.Component {
    state: ProductsPageState = {
        products: [],
        categories: [],
        cartItems: []
    };
    
    constructor(props: any) {
        super(props);
        store.subscribe(() => {
            const state = store.getState();
            const products = state.products.products || [];
            const categories = state.categories.categories || [];
            const cartItems = state.cart.items || [];
            this.setState({products, categories, cartItems});
        });
    }

    componentDidMount() {
        store.dispatch(fetchProducts());
    }

    get products() {
        return this.state.products
            .filter((product: ProductDTO) => {
                if (!this.state.categories.length) return true;
                if (!product?.category) return false;
                return this.state.categories.includes(product.category);
            })
            .map((product: ProductDTO) => {
                const id = product.productId.value;
                const cartItem = this.state.cartItems
                    .find(item => item.product.productId.value === id);
                const quantity = cartItem?.quantity || 0;
                return <Product key={product.productId.value}
                                name={product.name}
                                productId={product.productId}
                                imageUrl={product.imageUrl}
                                price={product.price}>
                    <CartButton product={product}
                                quantity={quantity}>
                    </CartButton>
                </Product>
            });
    }

    render() {
        return <div className="content">
            <Filter></Filter>
            <section className="products-list">
                {this.products}
            </section>
        </div>
    }
}

export default Products;