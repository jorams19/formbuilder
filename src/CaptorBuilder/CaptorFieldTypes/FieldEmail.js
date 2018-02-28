import React, { Component } from 'react';
import { Input, Form } from 'antd';

const { Item } = Form;

class FieldEmail extends Component {
  render() {
    const itemStyle = { marginBottom: '12px' };
    return (
      <div>
        <Input placeholder="Enter Question" size="large"/>
        <Input placeholder="Enter your description here"/>
      </div>
    );
  }
}

export default FieldEmail;
