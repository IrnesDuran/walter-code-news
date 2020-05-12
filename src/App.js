import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Header  from './components/Header/Header';
import ArticlePage from './pages/ArticlePage/ArticlePage';


import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/articles/:article' component={ArticlePage} />
        </Switch>
    </div>

  );
}

export default App;
