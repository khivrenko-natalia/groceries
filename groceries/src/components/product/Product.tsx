import React from 'react';
import { ProductDTO } from '../../models/ProductDTO';

import './Product.scss';

class Product extends React.Component<ProductDTO> {
    render() {
        return <article className="product">
            <div className="produt-image">
                <img src={this.props.imageUrl} alt={this.props.name}></img>
            </div>
            <div className="product-brand">{this.props?.brand}</div>
            <div className="product-name">{this.props.name}</div>
            <div className="product-sizes">
                <div className="product-size"></div>
                <div className="product-prize-per"></div>
            </div>
            <div className="product-price">${this.props.price}</div>
            <div className="quantity-control">{this.props.children}</div>
        </article>
    }
}

export default Product;