import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { Avatar, Icon } from 'antd';
import shortid from 'shortid';
import classNames from 'classnames';
import types from './types';

const formItemSpecs = {
  beginDrag(props, monitor) {
    return {
      id: shortid.generate(),
      label: props.fieldData.label,
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
      <div className="FieldListItemWrap">
        <div className={classNames('FieldListItem', { isDragging })}>
          <div className="FieldIcon">
            <Avatar icon={fieldData.icon} shape="square" style={{ backgroundColor: '#4497fb', marginRight: '12px' }}/>
          </div>
          <div className="FieldInfo">
            <h4>{fieldData.label}</h4>
            <small>{fieldData.description}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default DragSource(types.FIELD, formItemSpecs, collect)(FormFieldListItem);
