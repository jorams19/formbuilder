import React, { Component } from 'react';
import { Row, Col, Tabs } from 'antd';
import FormFieldListItem from './FormFieldListItem';
import CaptorSettings from './CaptorSettings';
import types from './types';

const { TabPane } = Tabs;

class FormFieldList extends Component {
  state = {
    fields: [{
      id: '1',
      label: 'Short Text',
      description: 'A multi-purpose text field',
      type: 'SHORT_TEXT',
      icon: 'edit',
    }, {
      label: 'Email',
      id: '2',
      description: 'An input for email address',
      type: 'EMAIL_ADDRESS',
      icon: 'mail',
    }, {
      label: 'Textarea',
      id: '3',
      description: 'An input for email address',
      type: 'TEXTAREA',
      icon: 'form',
    }, {
      label: 'Multiple Choice',
      id: '4',
      description: 'An input for email address',
      type: 'MULTIPLE_CHOICE',
      icon: 'bars',
    }, {
      label: 'Checkbox',
      id: '5',
      description: 'An input for email address',
      type: 'CHECKBOX',
      icon: 'check-square-o',
    }, {
      label: 'Dropdown',
      id: '6',
      description: 'An input for email address',
      type: 'DROPDOWN',
      icon: 'down',
    }, {
      label: 'Datepicker',
      id: '7',
      description: 'An input for email address',
      type: 'DATE',
      icon: 'calendar',
    }, {
      label: 'File Upload',
      id: '8',
      description: 'An input for email address',
      type: 'FILE',
      icon: 'file',
    }],
  }

  render() {
    const { fields } = this.state;
    return (
      <div id="FormFieldList">
        <Tabs size="large" style={{ height: '100%', overflow: 'visible' }}>
          <TabPane key="fields" tab="Fields">

              {fields.map(field => (
                <FormFieldListItem
                  key={field.id}
                  fieldData={field}
                />
              ))}
          </TabPane>
          <TabPane key="captor" tab="Captor Settings">
              <CaptorSettings />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default FormFieldList;
