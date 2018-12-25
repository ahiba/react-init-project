import React from 'react';
import { TestContext } from './home';

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TestContext.Consumer>
        {name => <span>{name}</span>}
      </TestContext.Consumer>
    );
  }
}
