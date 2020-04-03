import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Main/Main';
import NotFound from './NotFound/NotFound';
import Search from './Search/Search';
import MainHeader from './MainHeader/MainHeader';

import styles from './Router.module.css';

export default class Router extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <MainHeader />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
