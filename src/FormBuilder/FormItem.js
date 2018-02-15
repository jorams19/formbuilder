import React, { Component } from 'react';
import { Card } from 'antd';
import { DragSource } from 'react-dnd';
import FormItemDroppable from './FormItemDroppable';
import types from './types';

const formItemSpecs = {
  beginDrag(props, monitor) {
    return {
      id: props.formData.id,
      parent_id: props.containerIdx,
    };
  },
};

function collect(connect, monitor) {
  return {
    dragSourceConnector: connect.dragSource(),
    dragSourcePreview: connect.dragPreview(),
  };
}

class FormItem extends Component {
  state = {
    formData: this.props.formData,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      formData: nextProps.formData,
    });
  }

  render() {
    const { onDropFormField, dragSourceConnector, dragSourcePreview, onFieldClick, containerIdx } = this.props;
    const { formData } = this.state;

    return dragSourcePreview(
      <div id={`form-${formData.id}`} className="FormItem">
          {dragSourceConnector(
            <header className="FormItem-header">
              <h5>{formData.id}</h5>
            </header>
          )}
          <div className="FormItem-droppable">
            <FormItemDroppable
              containerIdx={containerIdx}
              formData={formData}
              formId={formData.id}
              fields={formData.fields}
              onDropField={(lastFormID, formID, values) => onDropFormField(lastFormID, formID, values) }
              onFieldClick={(data) => onFieldClick(data)}
            />
          </div>
      </div>
    );
  }
}

export default DragSource(types.FORM, formItemSpecs, collect)(FormItem);
