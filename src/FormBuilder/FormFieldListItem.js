import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Card, Icon } from 'antd';
import shortid from 'shortid';
import classNames from 'classnames';
import types from './types';

const formItemSpecs = {
  beginDrag(props, monitor) {
    return {
      id: shortid.generate(),
      title: props.fieldData.title,
      type: props.fieldData.type,
      prevForm: undefined,
    };
  },
  endDrag(props, monitor) {
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class FormFieldListItem extends Component {
  componentDidMount() {
    const { connectDragPreview, fieldData } = this.props;
    connectDragPreview(
      <div className="DroppableFieldItem">
        <h5>{fieldData.type}</h5>
      </div>
    );
  }

  render() {
    const { fieldData, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <Card className={classNames('FieldListItem', { isDragging })} hoverable>
          <Icon type={fieldData.icon} style={{ marginRight: '24px' }}/><span>{fieldData.title}</span>
        </Card>
      </div>
    );
  }
}

export default DragSource(types.FIELD, formItemSpecs, collect)(FormFieldListItem);
