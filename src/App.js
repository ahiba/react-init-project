import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';

import configureStore, { history } from './reduxes/configureStore';
import FrontendAuth from './components/FrontendAuth';
import { routerConfig } from './router/routerConfig';
import { initSize } from './util/fontsize';
import Intl from './Intl';

import 'antd/dist/antd.css';
import './style/index.scss';

const store = configureStore();

class App extends Component {
  componentDidMount() {
    initSize();
  }
  componentWillUnmount() {
    initSize = null;
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Intl>
            <Switch>
              <FrontendAuth config={routerConfig} />
            </Switch>
          </Intl>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
