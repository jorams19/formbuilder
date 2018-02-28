import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import classNames from 'classnames';
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
              {...provided.droppableProps}
              className={classNames('CaptorDroppable', { isDraggingOver: snapshot.isDraggingOver })}
            >
              <div className="placeholder" />
              <CaptorFieldItem id="1" type="TEXT"/>
              <CaptorFieldItem id="2" type="EMAIL"/>
              <CaptorFieldItem id="3" type="MULTIPLE"/>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default CaptorDroppable;
