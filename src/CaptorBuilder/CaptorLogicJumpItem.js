import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, Button, Input, Select, Divider, Row, Col } from 'antd';

const { Group } = Button;
const { Option } = Select;

class CaptorLogicJumpItem extends Component {
  render() {
    return (
      <Draggable>
        {(provided, snapshot) => (
          <div>
            <Card
              className="CaptorLogicJumpItem"
              title={<div><strong>When</strong> answering block 1</div>}
              extra={
                <Group size="small">
                  <Button icon="ellipsis"/>
                  <Button icon="minus"/>
                  <Button icon="plus"/>
                </Group>
              }
            >
              <Row gutter={8} type="flex" align="middle" style={{ marginBottom: '8px'}}>
                <Col span={2}><strong>If</strong></Col>
                <Col span={11}>
                  <Select defaultValue="question1" style={{ width: '100%'}}>
                    <Option key="question1" value="question1">Question #1</Option>
                    <Option key="question2" value="question2">Question #2</Option>
                    <Option key="question3" value="question3">Question #3</Option>
                  </Select>
                </Col>
                <Col span={11}>
                  <Select defaultValue="equal" style={{ width: '100%'}}>
                    <Option key="question1" value="equal">is equal to</Option>
                    <Option key="question2" value="question2">is not equal to</Option>
                    <Option key="question3" value="question3">begins with</Option>
                    <Option key="question3" value="question3">ends with</Option>
                    <Option key="question3" value="question3">contains</Option>
                    <Option key="question3" value="question3">does not contain</Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={8} type="flex" align="middle">
                <Col span={11} offset={2}><Input placeholder="Enter Value" /></Col>
                <Col span={6}>
                  <Select defaultValue="or" style={{ width: '100%'}}>
                    <Option key="or" value="or">or</Option>
                    <Option key="and" value="and">and</Option>
                  </Select>
                </Col>
                <Col span={5}>
                  <Group size="small">
                    <Button icon="minus"/>
                    <Button icon="plus"/>
                  </Group>
                </Col>
              </Row>
              <Divider type="horizontal" />
              <Row gutter={8} type="flex" align="middle">
                <Col span={8}><strong>Then</strong> jump to</Col>
                <Col span={16}>
                  <Select defaultValue="question2" style={{ width: '100%'}}>
                    <Option key="" value="question2">Question #2</Option>
                    <Option key="" value="question3">Question #3</Option>
                  </Select>
                </Col>
              </Row>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}

export default CaptorLogicJumpItem;
