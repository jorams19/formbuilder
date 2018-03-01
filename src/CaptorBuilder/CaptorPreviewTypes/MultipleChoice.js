import React, { Component } from 'react';
import { Checkbox, Radio } from 'antd';

const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

class MultipleChoice extends Component {
  render() {
    const { multipleSelect } = this.props;
    const optionData = [
      { label: 'Option 1', value: 'option1'},
      { label: 'Option 2', value: 'option2'},
      { label: 'Option 3', value: 'option3'},
    ];

    const display = (multipleSelect) ?
      (<CheckboxGroup options={optionData}/>) :
      (<RadioGroup>
        {optionData.map((option) => (
          <Radio value={option.value}>{option.label}</Radio>
        ))}
      </RadioGroup>);

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default MultipleChoice;
