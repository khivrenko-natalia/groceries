import React from 'react';
import './Cart.scss';
import store from '../../store';
import CartItem from '../../models/CartItem';
import cartImg from '../../images/cart.svg';
import foldImg from '../../images/fold.svg';

import CartProduct from '../cart-product/CartProduct';
import CartButton from '../cart-button/CartButton';
import { toggleCart } from '../../features/cartSlice';


class Cart extends React.Component {
    state: {opened: boolean, items: CartItem[]};

    constructor(props: any) {
        super(props);
        this.state = {opened: false, items: []};
        store.subscribe(() => {
            const opened = store.getState().cart.opened;
            const items = store.getState().cart.items;
            this.setState({opened, items});
        });
    }
    
    toggleCart() {
        store.dispatch(toggleCart(true));
    }

    get sum () {
        if (!this.state.items.length) return null;
        const sum =  this.state.items
            .map(i => i.quantity * i.product.price)
            .reduce((acc, val) => acc + val, 0);
        return <div className="total-sum">Total Sum: ${sum}</div>
    }

    get items() {
        return this.state.items.map((item: CartItem) => {
            const product = item.product;
            return <CartProduct key={product.productId.value}
            name={product.name}
            productId={product.productId}
            imageUrl={product.imageUrl}
            price={product.price}>
                <CartButton product={product}
                            quantity={item.quantity}>
                </CartButton>
            </CartProduct>
        });
    }

    render() {
        return <section className={`cart ${this.state.opened ? 'opened' : 'closed'}`}>
            <div className="cart-header">
                <img src={foldImg} alt="fold cart"
                     className="fold" onClick={() => this.toggleCart()}></img>
                <h5>Your Cart</h5>
                <div className="nav-link">
                    <img src={cartImg} alt="cart"></img>
                    <span>Cart</span>
                </div>
            </div>
            <div>{this.items}</div>
            {this.sum}
        </section>
    }
}

export default Cart;