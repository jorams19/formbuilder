import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Avatar, Input } from 'antd';

class CaptorFieldItem extends Component {
  render() {
    return (
      <Draggable>
        {(provided, snapshot) => (
          <div
            className="CaptorFieldItem"
          >
            <span
              ref={provided.innerRef}
              className="CaptorFieldItem-handle"
            >
              <Avatar
                icon="mail"
                shape="square"
                style={{ backgroundColor: '#4497fb', width: '64px', marginRight: '12px' }}
              />
            </span>
            <Input placeholder="Type your question here"/>
          </div>
        )}
      </Draggable>
    );
  }
}

export default CaptorFieldItem;
