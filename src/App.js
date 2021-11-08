import React from 'react';
import Home from './components/homePage/Home';
import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductPage from './components/products/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BuyPage from './components/products/BuyPage';
import Basket from './components/basket/Basket';
import BasketLink from './components/BasketLink';
import PayPage from './components/Pay/PayPage';
import OrderSuccess from './components/Pay/OrderSuccess';
import SearchOrder from './components/searchOrder/SearchOrder';
import ComingSoon from './components/ComingSoon';
import SearchPage from './components/searchOrder/SearchPage';


const App = () => {

  return (
    <Router>
      <Header/>
      <BasketLink/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/product-list" component={ProductPage}/>
        <Route exact path="/product-detail/:id?" component={BuyPage}/>
        <Route exact path="/your-basket" component={Basket}/>
        <Route exact path="/shipping-information" component={PayPage}/>
        <Route exact path="/order-success/:id" component={OrderSuccess}/>
        <Route exact path="/search-order" component={SearchOrder}/>
        <Route exact path="/coming-soon" component={ComingSoon}/>
        <Route exact path="/search-results" component={SearchPage}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;