import React, { Component } from 'react';
import { Form, Input } from 'antd';

class FormToolbarFieldForm extends Component {
  state = {
    fieldData: undefined
  }
  componentWillMount() {
    this.setState({
      fieldData: this.props.fieldData,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      fieldData: nextProps.fieldData,
    });
  }
  render() {
    const { form } = this.props;
    const { fieldData } = this.state;
    const { getFieldDecorator } = form;

    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('label',{
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('type',{
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
    const { handleChanges, indexData } = props;
    const { container_id, form_id, field_id } = indexData;
    console.log(indexData);
    handleChanges({
      container_id,
      form_id,
      field_id,
    }, values);
  },
})(FormToolbarFieldForm);
