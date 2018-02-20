import React, { Component } from 'react';
import { Form, Input, Divider, Row, Col, Select, Button } from 'antd';

const { Item } = Form;
const { Option } = Select;

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
        <Item>
          {getFieldDecorator('label',{
          })(<Input />)}
        </Item>
        <Item>
          {getFieldDecorator('type',{
          })(<Input />)}
        </Item>
        <Divider type="horizontal"/>
        <h3>Additional Settings</h3>
        <Row gutter={24}>
          <Col span={12}>
            <Item>
              {getFieldDecorator('option1',{
                initialValue: 'option1'
              })(<Input />)}
            </Item>
          </Col>
          <Col span={12}>
            <Item>
              {getFieldDecorator('formid',{
              })(
                <Select>
                  <Option value="form1id">Form 1</Option>
                  <Option value="form2id">Form 2</Option>
                  <Option value="form3id">Form 3</Option>
                </Select>
              )}
            </Item>
          </Col>
          <Col span={24}><Button type="dashed" style={{ width: '100%' }}>Add Option</Button></Col>
        </Row>
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
    handleChanges({
      container_id,
      form_id,
      field_id,
    }, values);
  },
})(FormToolbarFieldForm);
