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
    }, {
      title: 'Textarea',
      id: '3',
      description: 'An input for email address',
      type: 'TEXTAREA',
      icon: 'edit',
    }, {
      title: 'Multiple Choice',
      id: '4',
      description: 'An input for email address',
      type: 'MULTIPLE_CHOICE',
      icon: 'edit',
    }, {
      title: 'Checkbox',
      id: '5',
      description: 'An input for email address',
      type: 'CHECKBOX',
      icon: 'edit',
    }, {
      title: 'Dropdown',
      id: '6',
      description: 'An input for email address',
      type: 'DROPDOWN',
      icon: 'edit',
    }, {
      title: 'Datepicker',
      id: '7',
      description: 'An input for email address',
      type: 'DATE',
      icon: 'edit',
    }, {
      title: 'File Upload',
      id: '8',
      description: 'An input for email address',
      type: 'FILE',
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
                  span={24}
                  style={{ marginBottom: '18px' }}
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
