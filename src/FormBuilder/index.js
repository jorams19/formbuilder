import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.min.css';
import FormFieldList from './FormFieldList';
import FormArea from './FormArea';
import types from './types';

const { Content, Sider } = Layout;

class FormBuilder extends Component {
  render() {
    return (
      <Layout className="FormBuilder">
        <Sider
          style={{ padding: '20px 32px', background: '#FFF', boxShadow: '0 2px 8px rgba(0,0,0,.09)' }}
          width={300}
        >
          <FormFieldList />
        </Sider>
        <Content>
          <FormArea />
        </Content>
      </Layout>
    );
  }
}

export default DragDropContext(HTML5Backend)(FormBuilder);
