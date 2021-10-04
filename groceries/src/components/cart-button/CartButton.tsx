import React from 'react';
import store from '../../store';
import { addProduct, subtractProduct } from '../../features/cartSlice';
import CartItem from '../../models/CartItem';
import './CartButton.scss';

class CartButton extends React.Component<Partial<CartItem>> {
    add() {
        store.dispatch(addProduct(this.props.product));
    }

    subtract() {
        store.dispatch(subtractProduct(this.props.product));
    }

    render() {
        if (this.props.quantity === 0) {
            return <button onClick={() => this.add()} className="cart-button">
                Add to cart
            </button>
        }
        return <div className="cart-quantity-controler">
            <button className="cart-button" onClick={() => this.subtract()}>-</button>
            <div className="toggled-quantity">{this.props.quantity}</div>
            <button className="cart-button" onClick={() => this.add()}>+</button>
        </div>
    }
}

export default CartButton;