import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <Switch>
            <Route path="/" component={ Login } />
            <Route path="/carteira" component={ Wallet } />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
