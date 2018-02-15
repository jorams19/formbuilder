import React, { Component } from 'react';
import { Form, Input } from 'antd';

class FormToolbarFieldForm extends Component {
  render() {
    const { form , fieldData } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('label',{
            initialValue: fieldData && fieldData.label,
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('type',{
            initialValue: fieldData && fieldData.type,
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  mapPropsToFields: (props) => {
    return {
      label: Form.createFormField({ value: props.fieldData && props.fieldData.label }),
      type: Form.createFormField({ value: props.fieldData && props.fieldData.type }),
    };
  },
  onValuesChange: (props, values) => {
    const { fieldData, onFieldUpdate } = props;
    const indexData = {
      container_id: fieldData.container_id,
      form_id: fieldData.form_id,
      field_id: fieldData.id,
    };
    onFieldUpdate(indexData, values);
  },
})(FormToolbarFieldForm);
