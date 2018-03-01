import React, { Component } from 'react';
import { Select } from 'antd';

const { Option } = Select;

class Dropdown extends Component {
  render() {
    const optionData = [{
      title: 'Option 1',
      value: 'option1',
      key: 'option1'
    }, {
      title: 'Option 2',
      value: 'option2',
      key: 'option2',
    }];
    return (
      <Select size="large" style={{ minWidth: '320px' }}>
        {optionData.map((option) => (
          <Option key={option.key} value={option.value}>{option.title}</Option>
        ))}
      </Select>
    );
  }
}

export default Dropdown;
