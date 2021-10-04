import React from 'react';
import logo from '../../logo.svg';
import recipiesImg from '../../images/recipies.svg';
import shopImg from '../../images/shop.svg';
import profileImg from '../../images/profile.svg';
import settingsImg from '../../images/settings.svg';
import cartImg from '../../images/cart.svg';
import promoImg from '../../images/promo.svg';

import {Link, NavLink} from 'react-router-dom';

import './Header.scss';
import store from '../../store';
import { toggleCart } from '../../features/cartSlice';

class Header extends React.Component {
    state: {count: number};
    constructor(props: any) {
        super(props);
        this.state = {count: 0};
        store.subscribe(() => {
            const count = store.getState().cart.items.length || 0;
            this.setState({count});
        });
    }

    toggleCart() {
        store.dispatch(toggleCart(true));
    }

    get cartCount() {
        if (!this.state.count) return null;
        return <span className="counter">{this.state.count}</span>
    }

    render() {
        return <header className="header">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <input className="search" placeholder="Search"></input>
            <img src={promoImg} alt="promo" className="promo"></img>
            <nav className="navigation">
                <NavLink to="/recipies" className="nav-link"
                      activeClassName="current">
                    <img src={recipiesImg} alt="recipies"></img>
                    <span>Recipies</span>
                </NavLink>
                <NavLink to="/shop" className="nav-link"
                         activeClassName="current">
                    <img src={shopImg} alt="shop"></img>
                    <span>Shop</span>
                </NavLink>
                <NavLink to="/profile" className="nav-link"
                         activeClassName="current">
                    <img src={profileImg} alt="profile"></img>
                    <span>Profile</span>
                </NavLink>
                <NavLink to="/settings" className="nav-link"
                         activeClassName="current">
                    <img src={settingsImg} alt="settings"></img>
                    <span>Settings</span>
                </NavLink>
                <div className="nav-link"
                     onClick={() => this.toggleCart()}>
                    {this.cartCount}
                    <img src={cartImg} alt="cart"></img>
                    <span>Cart</span>
                </div>
            </nav>
        </header>
    }
}

export default Header;