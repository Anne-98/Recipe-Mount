import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RandomPage from './pages/RandomPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/src/carousel.js';
import DynamicCategoriesPage from './pages/DynamicCategoriesPage';
import DetailsPage from './pages/DetailsPage';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import NavbarFixed from './components/Home/NavbarFixed';
import SearchItemList from './pages/SearchItemList';
import Footer from './components/Home/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <NavbarFixed/>
      <Switch>
        <Route path="/Recipe-Mount"  component={HomePage}/>
        <Route path="/search/:dynamic/:dynamic" render={(props) => {return(<SearchItemList {...props}/>)}}/>
        <Route path="/search" component={SearchPage} />
        <Route path="/random" component={RandomPage}/>
        <Route path="/categories" component={CategoriesPage}/>
        <Route path="/" exact={true} component={HomePage}/>
        <Route path="/:dynamic/:dynamic" render={(props) =>{return(<DetailsPage  {...props } /> )}} />
        <Route path="/:dynamic" render={(props) => { return ( <DynamicCategoriesPage {...props } /> )}}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


