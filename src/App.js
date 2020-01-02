import React from 'react';
import './App.css';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';

import LandingPageContainer from './LandingPage/LandingPage.container';
import ProductGrid from './ProductGrid/ProductGrid';
import ProductList from './ProductList/ProductList';
import Detail from './Detail/Detail';


import Header from './Helper/Header';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import Register from './Register/Register';

import Profile from './Profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <div style={{marginTop: 170}}>
          <Switch>
            <Route path="/home" exact component={LandingPageContainer}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={Register}></Route> 
            <Route path="/profile" exact component={Profile}></Route> 
            <Route path="/productgird" exact component={ProductGrid}></Route>
            <Route path="/productgird" exact component={ProductGrid}></Route>
            <Route path="/productlist" exact component={ProductList}></Route>
            <Route path="/detail" exact component={Detail}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/checkout" exact component={Checkout}></Route>
            <Redirect to='/home' />
          </Switch>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
