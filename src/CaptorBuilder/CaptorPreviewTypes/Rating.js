import React, { Component } from 'react';
import { Rate } from 'antd';

class Rating extends Component {
  render() {
    return (
      <Rate allowClear />
    );
  }
}

export default Rating;
