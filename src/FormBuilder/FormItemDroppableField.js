import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import classNames from 'classnames';
import types from './types';

const fieldSpecs = {
  beginDrag(props, monitor) {
    return {
      // must include all the values of a field, not just id label type
      id: props.fieldData.id,
      label: props.fieldData.label,
      type: props.fieldData.type,
      prevForm: {
        id: props.formId,
        parent_id: props.containerIdx,
      },
    };
  },
  endDrag(props, monitor) {
    if(monitor.didDrop()) {
      const getDroppableData = monitor.getDropResult();
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class FormItemDroppableField extends Component {
  render() {
    const {
      connectDragSource,
      connectDragPreview,
      isDragging,
      onClick,
      formId,
      fieldData,
      containerIdx } = this.props;

    return connectDragPreview(
      connectDragSource(
        <div
          className={classNames('DroppableFieldItem', { isDragging })}
          onClick={() => onClick({
            container_id: containerIdx,
            form_id: formId,
            field_id: fieldData.id,
          })}
        >
          <h5>{fieldData.label}({fieldData.type})</h5>
        </div>
      )
    );
  }
}

export default DragSource(types.FIELD, fieldSpecs, collect)(FormItemDroppableField);
