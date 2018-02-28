import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar } from 'antd';
import classNames from 'classnames';
import fieldColors from './fieldColors';

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
            <div>
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className={classNames('CaptorField', { isDragging: snapshot.isDragging })}
              >
                <div className="CaptorFieldIcon">
                  <Avatar
                    icon={field.icon}
                    shape="square"
                    style={{ backgroundColor: fieldColors[field.type], marginRight: '12px' }}/>
                </div>
                <div className="CaptorFieldLabel">
                  <h4>{field.label}</h4>
                  <small>{field.description}</small>
                </div>
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default CaptorField;
