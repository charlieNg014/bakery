import React from 'react';
import './App.css';
import {Route, Switch} from'react-router-dom';
import {Provider} from "react-redux"
import store from "./redux/store"

//reuable items
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from "./pages/About"
import Team from "./pages/Team"
import Products from './pages/Products';
import Contact from './pages/Contact';
import Test from "./components/Test"
import ProductDetails from './components/products/ProductDetails'
import ShoppingCart from "./components/shoppingcart/ShoppingCart"
import UpdateCart from './components/shoppingcart/UpdateCart';

function App() {
  return (
    <>
    <Provider store = {store}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/products/details" component={ProductDetails} />
        <Route exact path="/shoppingcart" component={ShoppingCart} />
        <Route exact path="/updatecart" component={UpdateCart} />
      </Switch>
    </Provider>
    </>
  );
}

export default App;
