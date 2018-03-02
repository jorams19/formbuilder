import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Layout, Menu, Icon, Button } from 'antd';
import classNames from 'classnames';
import includes from 'lodash/includes';
import 'antd/dist/antd.min.css';

import CaptorToolbar from './CaptorToolbar';
import CaptorDroppable from './CaptorDroppable';
import CaptorPreview from './CaptorPreview';

const { Sider, Header, Content } = Layout;
const { Item } = Menu;

class CaptorBuilder extends Component {
  state = {
    isToolbarVisible: false,
    activeToolbarPanel: '',
    activeFieldId: 'asd23',
    fieldsArray: [
      {id: 'asd23', type: 'TEXT', title: 'Type some text'},
      {id: 'joasd', type: 'MULTIPLE', title: 'Select anything'},
      {id: 'uhf88', type: 'RATING', title: 'Rate me'},
      {id: 'asdd3', type: 'MULTIPLE', title: 'Hey, Im a dropdown'},
    ],
  };
  onDragStart= () => {
  }
  onDragEnd = () => {
    // Drag end here
  }
  onChangeActiveField = (id) => {
    this.setState({
      activeFieldId: id,
    });
  }

  handleMenuClick = (e, key) => {
    const { activeToolbarPanel } = this.state;
    if(activeToolbarPanel === key) {
      this.setState((prevState) => {
        return {
          isToolbarVisible: !prevState.isToolbarVisible,
        }
      });
    } else {
      this.setState((prevState) => {
        return {
          isToolbarVisible: true,
          activeToolbarPanel: key,
        };
    });
    }
  }

  handleCloseToolbar = () => {
    this.setState({
      isToolbarVisible: false,
    });
  }

  render() {
    const { isToolbarVisible, activeToolbarPanel, fieldsArray, activeFieldId } = this.state;
    const menuItems = [{
        title: 'Fields',
        key: 'fieldsList',
        icon: 'inbox',
      }, {
        title: 'Field Settings',
        key: 'fieldSettings',
        icon: 'tool',
      }, {
        title: 'Logic Jump',
        key: 'logicJump',
        icon: 'share-alt',
      }, {
        title: 'Calculator',
        key: 'calculator',
        icon: 'calculator',
      }];
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        <div className="CaptorBuilderLayout">
          <Header className="CaptorBuilderHeader">
            <div className="CaptorBuilderHeader-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="52" viewBox="844.346 223.527 200 52.947">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="765.522" y1="202.106" x2="765.522" y2="211.257" gradientTransform="matrix(1 0 0 -1 84 475)">
                  <stop offset="0" stopColor="#4478bb"/>
                  <stop offset=".652" stopColor="#3db1e8"/>
                  <stop offset="1" stopColor="#3acafc"/>
                </linearGradient>
                <path fill="url(#a)" d="M845.273 263.743h8.498v9.15h-8.498v-9.15z"/>
                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="775.218" y1="202.106" x2="775.218" y2="218.665" gradientTransform="matrix(1 0 0 -1 84 475)">
                  <stop offset="0" stopColor="#4478bb"/>
                  <stop offset=".652" stopColor="#3db1e8"/>
                  <stop offset="1" stopColor="#3acafc"/>
                </linearGradient>
                <path fill="url(#b)" d="M854.969 256.335h8.498v16.559h-8.498v-16.559z"/>
                <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="785.186" y1="202.106" x2="785.186" y2="228.361" gradientTransform="matrix(1 0 0 -1 84 475)">
                  <stop offset="0" stopColor="#ff931e"/>
                  <stop offset=".588" stopColor="#fcbe16"/>
                  <stop offset="1" stopColor="#fbd712"/>
                </linearGradient>
                <path fill="url(#c)" d="M864.665 246.639h9.042v26.254h-9.042v-26.254z"/>
                <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="795.155" y1="202.106" x2="795.155" y2="237.512" gradientTransform="matrix(1 0 0 -1 84 475)">
                  <stop offset="0" stopColor="#4478bb"/>
                  <stop offset=".652" stopColor="#3db1e8"/>
                  <stop offset="1" stopColor="#3acafc"/>
                </linearGradient>
                <path fill="url(#d)" d="M874.906 237.488h8.498v35.406h-8.498v-35.406z"/>
                <linearGradient id="e" gradientUnits="userSpaceOnUse" x1="804.578" y1="202.106" x2="804.578" y2="246.01" gradientTransform="matrix(1 0 0 -1 84 475)">
                  <stop offset="0" stopColor="#4478bb"/>
                  <stop offset=".652" stopColor="#3db1e8"/>
                  <stop offset="1" stopColor="#3acafc"/>
                </linearGradient>
                <path fill="url(#e)" d="M884.602 228.99h7.953v43.903h-7.953V228.99z"/>
                <path className="logotext" fill="#384855" d="M905.413 272.753v-43.83h8.479v43.83h-8.479zm19.566-13.829c.131 2.437.837 4.37 2.12 5.806 1.281 1.434 2.967 2.152 5.054 2.152 1.391 0 2.619-.315 3.685-.945 1.063-.631 1.75-1.511 2.054-2.643h8.74c-1 3.306-2.739 5.849-5.217 7.632-2.479 1.782-5.437 2.674-8.871 2.674-10.697 0-16.045-5.825-16.045-17.479 0-2.478.348-4.717 1.042-6.717.695-2 1.707-3.718 3.033-5.153 1.327-1.435 2.945-2.532 4.859-3.293 1.914-.761 4.109-1.142 6.588-1.142 4.957 0 8.707 1.589 11.25 4.762 2.543 3.174 3.815 7.958 3.815 14.349h-22.108v-.003zm13.371-5.347c-.043-1.175-.251-2.208-.62-3.099-.37-.891-.859-1.63-1.468-2.218a5.852 5.852 0 0 0-2.086-1.304 7.05 7.05 0 0 0-2.414-.424c-1.696 0-3.164.62-4.403 1.859-1.239 1.239-1.946 2.967-2.119 5.185l13.11.001zm31.436 19.176c-.261-.827-.437-1.784-.522-2.871-1 1.132-2.326 2.033-3.979 2.706-1.653.675-3.565 1.012-5.739 1.012-3.697 0-6.403-.815-8.12-2.446-1.719-1.63-2.576-3.75-2.576-6.358 0-2.306.369-4.142 1.107-5.512a8.293 8.293 0 0 1 3.066-3.229c1.305-.781 2.859-1.358 4.664-1.728a99.113 99.113 0 0 1 5.902-1.011c2.13-.305 3.564-.708 4.304-1.208.74-.5 1.109-1.314 1.109-2.445 0-1.044-.489-1.86-1.468-2.446-.979-.587-2.293-.882-3.945-.882-1.957 0-3.359.435-4.207 1.305-.849.871-1.38 2.022-1.598 3.457h-7.892c.042-1.653.313-3.173.814-4.566a8.755 8.755 0 0 1 2.413-3.587c1.109-1 2.554-1.772 4.338-2.316 1.782-.543 3.955-.815 6.522-.815 2.521 0 4.663.283 6.424.848s3.175 1.381 4.239 2.445c1.064 1.067 1.836 2.393 2.315 3.979.479 1.587.716 3.382.716 5.381v20.284h-7.891l.004.003zm-.587-15.719c-.436.434-1.066.781-1.892 1.043-.827.261-2.022.544-3.587.847-2.436.48-4.109 1.089-5.023 1.826-.912.74-1.369 1.806-1.369 3.196 0 2.392 1.369 3.587 4.11 3.587a8.215 8.215 0 0 0 3.032-.555 7.594 7.594 0 0 0 2.414-1.5 7.543 7.543 0 0 0 1.63-2.218 6.107 6.107 0 0 0 .619-2.707l.066-3.522v.003zm34.11 15.719l-.065-3.915c-1.957 3.175-4.935 4.762-8.936 4.762-2.043 0-3.913-.392-5.608-1.175a12.234 12.234 0 0 1-4.37-3.391c-1.219-1.478-2.176-3.281-2.869-5.413-.696-2.131-1.044-4.544-1.044-7.24 0-2.435.293-4.663.881-6.685.587-2.021 1.445-3.772 2.575-5.251a11.684 11.684 0 0 1 4.142-3.424c1.632-.804 3.49-1.206 5.576-1.206 3.957 0 7.132 1.674 9.522 5.023v-15.915h8.349v43.83h-8.153zm-7.044-6.067c2.044 0 3.751-.847 5.121-2.543 1.368-1.696 2.054-3.914 2.054-6.653 0-6.955-2.37-10.435-7.109-10.435-4.869 0-7.305 3.305-7.305 9.914 0 2.87.675 5.207 2.021 7.012 1.349 1.803 3.087 2.705 5.218 2.705zm37.893-16.305c-.218-1.478-.772-2.554-1.663-3.229-.892-.673-2.25-1.011-4.076-1.011-1.739 0-3.056.207-3.947.62-.891.413-1.336 1.12-1.336 2.12 0 .869.445 1.564 1.336 2.086.892.521 2.186 1.021 3.881 1.5 2.783.782 5.131 1.446 7.046 1.989 1.912.544 3.444 1.186 4.597 1.924 1.152.74 1.978 1.663 2.479 2.772.498 1.108.749 2.598.749 4.467 0 2.869-1.196 5.249-3.587 7.142-2.392 1.892-5.936 2.837-10.632 2.837-2.305 0-4.392-.262-6.261-.783s-3.469-1.272-4.795-2.251-2.349-2.152-3.065-3.521c-.718-1.369-1.099-2.903-1.142-4.599h8.74c0 1.523.597 2.696 1.793 3.522 1.194.827 2.749 1.238 4.663 1.238 1.607 0 2.988-.249 4.142-.749 1.15-.499 1.728-1.272 1.728-2.316 0-1.173-.424-2.021-1.271-2.542-.849-.522-2.142-.979-3.881-1.371-3.132-.693-5.654-1.424-7.567-2.185-1.914-.761-3.401-1.598-4.467-2.512-1.066-.911-1.783-1.912-2.152-3-.37-1.086-.555-2.304-.555-3.652 0-1.216.25-2.369.751-3.457.499-1.086 1.293-2.042 2.381-2.87 1.086-.826 2.5-1.489 4.239-1.989 1.739-.5 3.869-.75 6.393-.75 4.607 0 7.979.936 10.108 2.804 2.13 1.87 3.304 4.458 3.521 7.761h-8.15v.005z"/>
              </svg>
            </div>
            <div className="CaptorBuilderHeader-action">
              <Button type="primary">Save Captor</Button>
            </div>
          </Header>
          <div className="CaptorBuilderLayoutContent">
            <div className="CaptorBuilderSider">
              <ul className="CaptorBuilderNav">
                {menuItems.map((item) => {
                  const isActive = (item.key === activeToolbarPanel && isToolbarVisible === true) ? true: false;
                  return (
                    <li className={classNames({ active: isActive })} onClick={(e) => this.handleMenuClick(e, item.key)} key={item.key}>
                      <Icon style={{ fontSize: '24px' }} type={item.icon} />
                      <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Content className="CaptorBuilderContent">
              <CaptorToolbar
                className={classNames('CaptorToolbar', { visible: isToolbarVisible, wide: includes(['logicJump','calculator'], activeToolbarPanel)})}
                panel={activeToolbarPanel}
                onToolbarClose={this.handleCloseToolbar}
              />
              <CaptorDroppable
                className="CaptorDroppable"
                fieldsArray={fieldsArray}
                activeFieldId={activeFieldId}
                onChangeActiveField={(id) => this.onChangeActiveField(id)}
              />
              <CaptorPreview
                fieldsArray={fieldsArray}
                activeFieldId={activeFieldId}
                onChangeActiveField={(id) => this.onChangeActiveField(id)}
              />
            </Content>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default CaptorBuilder;
