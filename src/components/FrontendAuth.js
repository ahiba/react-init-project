import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

export default class FrontendAuth extends Component {
  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    const isLogin = false;

    const targetRouterConfigArr = config.filter((v) => {
      return v.path === pathname;
    });

    const targetRouterConfig = targetRouterConfigArr[0];

    if (targetRouterConfig && !targetRouterConfig.auth && !isLogin) {
      const { component } = targetRouterConfig;
      return <Route exact path={pathname} component={component} />;
    }

    if (isLogin) {
      if (pathname === 'login') {
        return <Redirect to="/" />;
      } else {
        if (targetRouterConfig) {
          return <Route path={pathname} component={targetRouterConfig.component} />
        } 
          return <Redirect to="/say" />
        
      }
    } else {
      if (targetRouterConfig && targetRouterConfig.auth) {
        return <Redirect to="/login" />
      } else {
        return <Redirect to='/say' />
      }
    }
  }
} 
