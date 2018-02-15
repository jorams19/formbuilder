import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';
import FormItemDroppableField from './FormItemDroppableField';
import types from './types';

const droppableSpecs = {
  drop(props, monitor) {
    const { onDropField, formId, containerIdx } = props;
    const getField = monitor.getItem();
    const prevForm = (getField.prevForm !== undefined) ? {
      id: getField.prevForm.id,
      parent_id: getField.prevForm.parent_id,
    } : undefined;

    const nextForm = {
      id: formId,
      parent_id: containerIdx,
    };
    onDropField(prevForm, nextForm, {
      id: getField.id,
      title: getField.title,
      type: getField.type,
    });
    return {
      dropTargetId: props.formId,
    };
  },
  hover() {
  },
  canDrop(props, monitor) {
    const { formData } = props;
    const { fields } = formData;
    const getField = monitor.getItem();
    const checkIdInForm = fields.length > 0 && fields.find((field) => {
      return field.id === getField.id;
    });
    if (!checkIdInForm) {
      return true;
    }
    return false;
  }
};

function collect(connect, monitor) {
  return {
    isHover: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  };
}

class FormItemDroppable extends Component {
  state = {
    fields: this.props.fields,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      fields: nextProps.fields,
    });
  }

  render() {
    const { isHover, connectDropTarget, onFieldClick, formId, containerIdx } = this.props;
    const { fields } = this.state;
    return connectDropTarget(
      <div className={classNames('FormItemDroppable', { hovered: isHover})}>
        {fields && fields.map(field => (
          <FormItemDroppableField
            key={field.id}
            containerIdx={containerIdx}
            fieldData={field}
            formId={formId}
            onClick={(data) => onFieldClick(data)}
          />
        ))}
      </div>
    );
  }
}

export default DropTarget(types.FIELD, droppableSpecs, collect)(FormItemDroppable);
