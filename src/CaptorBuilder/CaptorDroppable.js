import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import CaptorFieldItem from './CaptorFieldItem';

class CaptorDroppable extends Component {
  render() {
    return (
      <Droppable droppableId="CaptorDroppable" type="FIELD">
        {(provided, snapshot) => {
          return (
            <div
              {...this.props}
              ref={provided.innerRef}
            >
              <CaptorFieldItem />
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default CaptorDroppable;
