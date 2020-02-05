import React from 'react';
import './App.css';
import {Route, Switch} from'react-router-dom';

//reuable items
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import About from "./pages/About"
import Team from "./pages/Team"
import Products from './pages/Products';
import Contact from './pages/Contact';
import Test from "./components/Test"

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/test" component={Test} />
    </Switch>
    </>
  );
}

export default App;
