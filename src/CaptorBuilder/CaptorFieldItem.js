import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar, Button, Tag, Icon } from 'antd';
import fieldColors from './fieldColors';

import FieldText from './CaptorFieldTypes/FieldText';
import FieldEmail from './CaptorFieldTypes/FieldEmail';
import FieldMultiple from './CaptorFieldTypes/FieldMultiple';
import FieldDropdown from './CaptorFieldTypes/FieldDropdown';
import FieldDate from './CaptorFieldTypes/FieldDate';

class CaptorFieldItem extends Component {
  state = {
    background: '#FFF',
  };
  fieldType = (type) => {
    switch(type) {
      case 'TEXT': return (<FieldText />);
      case 'EMAIL': return (<FieldEmail />);
      case 'MULTIPLE': return (<FieldMultiple />);
      case 'DROPDOWN': return (<FieldDropdown />);
      case 'DATE': return (<FieldDate />);
      default: return (<FieldText />);
    }
  }
  onFocus = () => {
    const { onChangeActiveField, id } = this.props;
    onChangeActiveField(id);
  }
  onBlur = () => {
    this.setState({
      background: '#FFF',
    });
  }
  render() {
    const { id, type, activeFieldId } = this.props;
    const { background } = this.state;
    return (
      <Draggable draggableId={id} type="FIELD">
        {(provided, snapshot) => (
          <div>
            <div
              className="CaptorFieldItem"
              ref={provided.innerRef}
              {...provided.draggableProps}
              style={{ backgroundColor: background, ...provided.draggableProps.style }}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              style={{
                ...provided.draggableProps.style,
                backgroundColor: (activeFieldId === id) ? fieldColors[type] + '20' : '#FFF',
              }}
            >
              <span
                className="CaptorFieldItem-handle"
              >
                <Tag
                  color={fieldColors[type]}
                  {...provided.dragHandleProps}
                  style={{ fontSize: '12px', marginRight: '12px' }}
                >
                  <Icon type="mail" />
                  <span>1</span>
                </Tag>
              </span>
              <div>
                {this.fieldType(type)}
                <div>
                  <Tag color="volcano" closable>Logic Jump</Tag>
                  <Tag color="blue" closable>Calculator</Tag>
                </div>
              </div>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Draggable>
    );
  }
}

export default CaptorFieldItem;
