import React, { Component } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Textarea extends Component {
  render() {
    return (
      <TextArea placeholder="Enter text here" rows={4} />
    );
  }
}

export default Textarea
