import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Cart from './components/cart/Cart';

class App extends React.Component  {
  render() {
    return <main>
      <section>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Redirect to="/shop" />
            </Route>
            <Route exact path="/shop" component={Products}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </section>
      <Cart></Cart>
    </main>
  }
}

export default App;
