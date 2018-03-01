import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col, Select } from 'antd';
import CaptorLogicJumpItem from './CaptorLogicJumpItem';

const { Option } = Select;

class CaptorLogicJump extends Component {
  render() {
    const { onToolbarClose } = this.props;
    return (
      <div className="CaptorLogicJump">
        <div className="CaptorToolbarHeader CaptorPanelHeader">
          <div className="CaptorPanelHeader-title">
            <span>Logic Jump</span>
            <Button onClick={onToolbarClose} icon="close-square" title="Close Panel" />
          </div>
        </div>
        <div className="CaptorToolbarBody">
          <Card style={{ marginBottom: '24px'}}>
            <Row gutter={8} type="flex" align="middle" justify="space-between">
              <Col span={12}>Make your captor smarter</Col>
              <Col span={10}>
                <Button type="primary">Add Logic Jump</Button>
              </Col>
            </Row>
          </Card>
          <Droppable droppableId="LogicJumpDroppable">
            {(provided, snapshot) => (
              <CaptorLogicJumpItem />
            )}
          </Droppable>
          <Card>
            <Row gutter={8} type="flex" align="middle">
              <Col span={8}><strong>Then</strong> jump to</Col>
              <Col span={16}>
                <Select style={{ width: '100%'}}>
                  <Option key="" value="">Question #1</Option>
                  <Option key="" value="">Question #2</Option>
                  <Option key="" value="">Question #3</Option>
                </Select>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default CaptorLogicJump;
