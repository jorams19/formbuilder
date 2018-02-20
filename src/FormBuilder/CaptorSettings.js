import React, { Component } from 'react';
import { Form, Input } from 'antd';

const { Item } = Form;

class CaptorSettings extends Component {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="CaptorSettings">
        <Form>
          <Item label="Captor Title">
            {getFieldDecorator('title',{})(
              <Input />
            )}
          </Item>
          <Item label="Header">
            {getFieldDecorator('title',{})(
              <Input />
            )}
          </Item>
          <Item label="Body">
            {getFieldDecorator('title',{})(
              <Input />
            )}
          </Item>
          <Item label="Lead Category">
            {getFieldDecorator('title',{})(
              <Input />
            )}
          </Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(CaptorSettings);
