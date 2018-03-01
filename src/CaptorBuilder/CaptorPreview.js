import React, { Component } from 'react';
import { Input, Form, Progress, Button } from 'antd';
import Scroll from 'react-scroll';
import produce from 'immer';

import CaptorPreviewItem from './CaptorPreviewItem';

const { Element, Events, scrollSpy, scroller, Link } = Scroll;
const { Item } = Form;

class CaptorPreview extends Component {
  state = {
    currentActiveField: 0,
    fieldsData: [
      {name: 'field-1', title: 'What is your name?', type: 'TEXT', active: true},
      {name: 'field-2', title: 'Rate our app', type: 'RATING', active: false},
      {name: 'field-3', title: 'Choose an option', type: 'DROPDOWN', active: false},
      {name: 'field-4', title: 'Type anything here', type: 'TEXTAREA', active: false},
    ],
  };
  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {

    });
    Events.scrollEvent.register('end', (to, element) => {

    });

    scrollSpy.update();
  }
  moveUp = () => {
    const { currentActiveField, fieldsData } = this.state;
    const nextFieldsData = produce(fieldsData, draftFieldsData => {
      draftFieldsData[currentActiveField].active = false;
      draftFieldsData[currentActiveField - 1].active = true;
    });
    scroller.scrollTo(fieldsData[currentActiveField - 1].name, {
      duration: 300,
      smooth: true,
      containerId: 'CaptorPreviewScrollable',
      offset: -250,
    });
    this.setState((prevState) => {
      return {
        fieldsData: nextFieldsData,
        currentActiveField: prevState.currentActiveField - 1,
      };
    });
  }
  moveDown = () => {
    const { currentActiveField, fieldsData } = this.state;
    const nextFieldsData = produce(fieldsData, draftFieldsData => {
      draftFieldsData[currentActiveField].active = false;
      draftFieldsData[currentActiveField + 1].active = true;
    });
    scroller.scrollTo(fieldsData[currentActiveField + 1].name, {
      duration: 300,
      smooth: true,
      containerId: 'CaptorPreviewScrollable',
      offset: -250,
    });
    this.setState((prevState) => {
      return {
        fieldsData: nextFieldsData,
        currentActiveField: prevState.currentActiveField + 1,
      };
    });
  }
  render() {
    const { fieldsData } = this.state;
    return (
      <div className="CaptorPreview">
        <div id="CaptorPreviewScrollable" className="CaptorPreviewScrollable">
          <div className="CaptorElementsWrap">
            {fieldsData.map((field) => (
              <CaptorPreviewItem
                title={field.title}
                name={field.name}
                type={field.type}
                active={field.active}
              />
            ))}
          </div>
        </div>
        <div className="CaptorPrevewActions">
          <Progress percent={40} status="active" showInfo={false} />
          <Button onClick={this.moveUp} size="large" type="primary" icon="up" style={{ marginLeft: '8px' }}/>
          <Button onClick={this.moveDown} size="large" type="primary" icon="down" style={{ marginLeft: '8px' }}/>
        </div>
      </div>
    );
  }
}

export default CaptorPreview;
