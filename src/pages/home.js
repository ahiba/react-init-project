import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import * as actions from './homeRedux';
import { getLogin } from '../dao/api';
import TestComponent from './testComponent';

export const TestContext = React.createContext('lisi');
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
    };
  }
  getLogin = () => {
    getLogin('/login', {}, { method: 'get' }).then((res) => {
      if (res.success === true) {
        this.setState({
          name: res.data && res.data.name,
          id: res.data && res.data.id,
        });
      }
    });
  }
  changeLanguage = () => {
    let { changeLan } = this.props;
    changeLan && changeLan();
  }
  render() {
    const { link, name, sex, changeLan } = this.props;
    return (
      <div className="homePage">
        <div>{name}</div>
        <div>{sex}</div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <button onClick={() => {
          link();
        }}>
          点击跳转到登录页
        </button>
        <button onClick={() => {
          this.getLogin();
        }}>
          <FormattedMessage 
            id="home.btn.title"
            defaultMessage="点击登录"/>
        </button>
        <p>
          {`用户名 ${this.state.name} id ${this.state.id}`}
        </p>
        <TestContext.Provider value="wangwu">
          <TestComponent />
        </TestContext.Provider>
        <Button onClick={this.changeLanguage}>切换语言</Button>
      </div>
    );
  }
}

export default connect(
  (state) => {
      const { my: { info } } = state;
      const { name, sex } = info;
      return {
          name,
          sex,
      };
  },
  dispatch => (bindActionCreators({ ...actions }, dispatch)),
)(Example);

Example.propTypes = {
  link: PropTypes.func,
  name: PropTypes.string,
  sex: PropTypes.string,
};
