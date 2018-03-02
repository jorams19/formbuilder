import React, { Component } from 'react';
import { Form, Progress, Button } from 'antd';
import Scroll from 'react-scroll';

import CaptorPreviewItem from './CaptorPreviewItem';

const { Events, scrollSpy, scroller } = Scroll;

class CaptorPreview extends Component {
  state = {
    currentActiveField: (this.props.activeFieldId) ? 0 : 0,
  };
  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {

    });
    Events.scrollEvent.register('end', (to, element) => {

    });

    scrollSpy.update();
  }
  scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 300,
      smooth: true,
      containerId: 'CaptorPreviewScrollable',
      offset: -250,
    });
  }
  getFieldIndex = (id) => {
    const { fieldsArray } = this.props;
    return fieldsArray.findIndex((field) => {
      return field.id === id;
    });
  }
  moveUp = () => {
    const { onChangeActiveField, fieldsArray, activeFieldId } = this.props;
    const index = this.getFieldIndex(activeFieldId);
    const maxStep = Math.max(0, index - 1);
    onChangeActiveField(fieldsArray[maxStep].id);
    this.scrollTo();
  }
  moveDown = () => {
    const { onChangeActiveField, fieldsArray, activeFieldId } = this.props;
    const index = this.getFieldIndex(activeFieldId);
    const minStep = Math.min(fieldsArray.length - 1, index + 1);
    onChangeActiveField(fieldsArray[minStep].id);
    this.scrollTo();
  }
  render() {
    const { fieldsArray, activeFieldId, onChangeActiveField } = this.props;
    this.scrollTo(activeFieldId);
    return (
      <div className="CaptorPreview">
        <div id="CaptorPreviewScrollable" className="CaptorPreviewScrollable">
          <div className="CaptorElementsWrap">
            {fieldsArray.map((field) => {
              const active = (field.id === activeFieldId) ? true: false;
              return (
                <CaptorPreviewItem
                  key={field.id}
                  title={field.title}
                  id={field.id}
                  type={field.type}
                  active={active}
                  activeFieldId={activeFieldId}
                  onChangeActiveField={onChangeActiveField}
                />
              );
            })}
          </div>
        </div>
        <div className="CaptorPrevewActions">
          <Progress percent={40} status="active" showInfo={false} />
          <div>
          <Button onClick={this.moveUp} size="large" type="primary" icon="up" style={{ marginLeft: '8px' }}/>
          <Button onClick={this.moveDown} size="large" type="primary" icon="down" style={{ marginLeft: '8px' }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptorPreview;
