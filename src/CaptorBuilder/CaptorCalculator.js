import React, { Component } from 'react';
import { Button, Card, Input, InputNumber, Select } from 'antd';

const InputGroup = Input.Group;
const { Group } = Button;
const { Option } = Select;

class CaptorCalculator extends Component {
  render() {
    const { onToolbarClose } = this.props;
    return (
      <div className="CaptorCalculator">
        <div className="CaptorToolbarHeader CaptorPanelHeader">
          <div className="CaptorPanelHeader-title">
            <span>Calculator</span>
            <Button onClick={onToolbarClose} icon="close-square" title="Close Panel" />
          </div>
        </div>
        <div className="CaptorToolbarBody">
          <Card
            title={<div><strong>When</strong> answering block 1</div>}
            extra={
              <Group size="small">
                <Button icon="ellipsis"/>
                <Button icon="minus"/>
                <Button icon="plus"/>
              </Group>
            }
          >
            If answer is <Input style={{ width: '100px', marginBottom: '8px' }}/> then
            <InputGroup compact style={{ display: 'inline' }}>
              <Select defaultValue="add" style={{ marginBottom: '8px'}}>
                <Option value="add">Add</Option>
                <Option value="subtract">Subtract</Option>
                <Option value="multiply">Multiply</Option>
                <Option value="divide">Divide</Option>
              </Select>
              <InputNumber />
            </InputGroup>
            to the sum of the
            <Select defaultValue="score">
              <Option value="score">Score</Option>
            </Select>
          </Card>
        </div>
      </div>
    );
  }
}

export default CaptorCalculator;
