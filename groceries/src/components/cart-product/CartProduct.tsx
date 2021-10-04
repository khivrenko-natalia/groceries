import React from 'react';
import { ProductDTO } from '../../models/ProductDTO';
import crossImg from '../../images/cross.svg';

import './CartProduct.scss';
import store from '../../store';
import { removeProduct } from '../../features/cartSlice';

class CartProduct extends React.Component<ProductDTO> {

    removeItem() {
        store.dispatch(removeProduct(this.props));
    }

    render() {
        return <article className="cart-product">
            <div className="cart-product-image">
                <img src={this.props.imageUrl} alt={this.props.name}></img>
            </div>
            <div className="card-info">
                <div className="cart-named">
                    <div className="cart-product-name">{this.props.name}</div>
                    <img className="remove-item"
                         onClick={() => this.removeItem()}
                         src={crossImg} alt="Remove item">
                    </img>
                </div>
                <div className="cart-amount">
                    <div className="quantity-control">{this.props.children}</div>
                    <div className="cart-product-price">${this.props.price}</div>
                </div>
            </div>
        </article>
    }
}

export default CartProduct;