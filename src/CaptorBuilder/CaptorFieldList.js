import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import classNames from 'classnames';
import CaptorField from './CaptorField';

class CaptorFieldList extends Component {
  render() {
    const { className, onToolbarClose } = this.props;
    const fields = [{
      id: '1',
      label: 'Short Text',
      description: 'A multi-purpose text field',
      type: 'TEXT',
      icon: 'edit',
    }, {
      label: 'Email',
      id: '2',
      description: 'An input for email address',
      type: 'EMAIL',
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
      type: 'MULTIPLE',
      icon: 'bars',
    }, {
      label: 'Dropdown',
      id: '5',
      description: 'An input for email address',
      type: 'DROPDOWN',
      icon: 'down',
    }, {
      label: 'Datepicker',
      id: '6',
      description: 'An input for email address',
      type: 'DATE',
      icon: 'calendar',
    }, {
      label: 'Opinion Scale',
      id: '7',
      description: 'An input for email address',
      type: 'OPINION',
      icon: 'star',
    }, {
      label: 'Rating',
      id: '8',
      description: 'An input for email address',
      type: 'RATING',
      icon: 'heart',
    }, {
      label: 'File Upload',
      id: '9',
      description: 'An input for email address',
      type: 'FILE',
      icon: 'file',
    }];

    return (
      <div className={`CaptorFieldList ${className}`} >
        <div className="CaptorToolbarHeader CaptorPanelHeader">
          <div className="CaptorPanelHeader-title">
            <span>Fields</span>
            <Button onClick={onToolbarClose} icon="close-square" title="Close Panel" />
          </div>
        </div>
        <div className="CaptorToolbarBody">
          <Droppable droppableId="CaptorFieldList" type="FIELD">
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {fields.map(field => (
                  <CaptorField
                    key={field.id}
                    field={field}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    );
  }
}

export default CaptorFieldList;
