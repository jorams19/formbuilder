import React, { Component } from 'react';
import { Row, Col, Tabs } from 'antd';
import FormFieldListItem from './FormFieldListItem';
import types from './types';

const { TabPane } = Tabs;

class FormFieldList extends Component {
  state = {
    fields: [{
      id: '1',
      title: 'Short Text',
      description: 'A multi-purpose text field',
      type: 'SHORT_TEXT',
      icon: 'edit',
    }, {
      title: 'Email',
      id: '2',
      description: 'An input for email address',
      type: 'EMAIL_ADDRESS',
      icon: 'edit',
    }],
  }

  render() {
    const { fields } = this.state;
    return (
      <div id="FormFieldList">
        <Tabs>
          <TabPane key="fields" tab="Fields">
            <Row gutter={8}>
              {fields.map(field => (
                <Col
                  key={field.id}
                  span={12}
                >
                  <FormFieldListItem
                    key={field.id}
                    fieldData={field}
                  />
                </Col>
              ))}
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default FormFieldList;
