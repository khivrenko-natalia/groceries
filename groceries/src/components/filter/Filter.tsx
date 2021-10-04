import React from 'react';
import { addCategory, removeCategory } from '../../features/categorySlice';
import { Category } from '../../models/Category';
import store from '../../store';
import './Filter.scss';

class Filter extends React.Component {
    state: {categories: Category[], origin: Category[]};

    constructor(props: any) {
        super(props);
        this.state = {categories: [], origin: []};
        store.subscribe(() => {
            const categories = store.getState().categories?.categories || [];
            const origin = store.getState().categories?.origin || [];
            this.setState({categories, origin});
        });
    }

    updateFilters(category: Category, selected: boolean) {
        if (selected) {
            store.dispatch(removeCategory(category));
        } else {
            store.dispatch(addCategory(category));
        }
    }

    get categories() {
        return this.state.origin.map((category: Category) => {
            const selected = this.state.categories.includes(category);
            return <div key={category}
                        className={`category ${selected ? 'selected': ''}`}
                        onClick={() => this.updateFilters(category, selected)}>
                {category}
            </div>
        });
    }

    render() {
        return <section className="filter">
            <h5 className="filter-title">Shop by category</h5>
            <div className="categories">{this.categories}</div>
        </section>
    }
}

export default Filter;