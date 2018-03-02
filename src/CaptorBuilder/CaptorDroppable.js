import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Button } from 'antd';
import classNames from 'classnames';
import CaptorFieldItem from './CaptorFieldItem';

class CaptorDroppable extends Component {
  render() {
    const { fieldsArray, activeFieldId, onChangeActiveField } = this.props;
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
              {fieldsArray.map((field) => (
                <CaptorFieldItem
                  id={field.id}
                  type={field.type}
                  activeFieldId={activeFieldId}
                  onChangeActiveField={(id) =>onChangeActiveField(id)}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    );
  }
}

export default CaptorDroppable;
