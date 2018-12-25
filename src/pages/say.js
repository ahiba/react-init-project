import React, { Component } from 'react';

export default class Say extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    console.log('say 执行了')
  }
  render() {
    return (
      <div>我是say页面</div>
    )
  }
}