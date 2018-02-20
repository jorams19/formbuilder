import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.min.css';
import FormFieldList from './FormFieldList';
import FormArea from './FormArea';
import types from './types';

const { Header, Content, Sider } = Layout;

class FormBuilder extends Component {
  state = {
    collapsed: false,
  }
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout className="FormBuilder">
        <Header className="FormEditorHeader">
          <div className="CaptorTitle">
            <h3>Captor Title</h3>
          </div>
          <div className="CaptorActions">
            <button>Save</button>
          </div>
        </Header>
        <Layout>
        <Sider
          onCollapse={this.onCollapse}
          collapsed={collapsed}
          collapsible
          collapsedWidth={0}
          style={{ background: '#FFF', boxShadow: '0 2px 8px rgba(0,0,0,.09)' }}
          width={300}
        >
          <FormFieldList />
        </Sider>
        <Content>
          <FormArea />
        </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DragDropContext(HTML5Backend)(FormBuilder);
