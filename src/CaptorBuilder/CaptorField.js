import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar } from 'antd';

class CaptorField extends Component {
  render() {
    const { field } = this.props;
    return (
      <Draggable
        draggableId={`field-${field.id}`}
        type="FIELD"
        index={field.id}
      >
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              className="CaptorField"
            >
              <div className="CaptorFieldIcon">
                <Avatar
                  icon={field.icon}
                  shape="square"
                  style={{ backgroundColor: '#4497fb', marginRight: '12px' }}/>
              </div>
              <div className="CaptorFieldLabel">
                <h4>{field.label}</h4>
                <small>{field.description}</small>
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default CaptorField;
