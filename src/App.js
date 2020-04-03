import React from 'react';
import './App.css';
import Library from './Library';
import Search from './Search';
import {Route} from 'react-router-dom';

const BooksApp = () => (
  <div className="app">
    <Route exact path={'/'} component={Library} />
    <Route path={'/search'} component={Search} />
  </div>
);

export default BooksApp;
