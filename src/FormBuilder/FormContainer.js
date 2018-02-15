import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import classNames from 'classnames';
import FormItem from './FormItem';
import types from './types';

const containerSpecs = {
  drop(props, monitor) {
    const { onDropFormItem } = props;
    const getForm = monitor.getItem();
    const containerIndexes = {
      prevCont: getForm.parent_id,
      nextCont: props.containerIdx,
    };
    onDropFormItem(containerIndexes, getForm.id);
    return {};
  },
  hover() {

  },
  canDrop(props, monitor) {
    const getForm = monitor.getItem();
    // const
    return true;
  }
}

function collect(connect, monitor) {
  return {
    isHover: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
  }
}

class FormContainer extends Component {
  state = {
    forms: this.props.forms,
  };
  render() {
    const {
      connectDropTarget,
      forms,
      onDropField,
      onFieldClick,
      containerIdx,
      isHover } = this.props;

    return connectDropTarget(
      <div className={classNames('FormContainer', { hovered: isHover })}>
        {forms && forms.map((form) => (
          <FormItem
            key={form.id}
            containerIdx={containerIdx}
            formData={form}
            onDropFormField={(lastFormID, formID, values) => onDropField(lastFormID, formID, values)}
            onFieldClick={(data) => { onFieldClick(data)}}
          />
        ))}
      </div>
    )
  }
}

export default DropTarget(types.FORM, containerSpecs, collect)(FormContainer);
