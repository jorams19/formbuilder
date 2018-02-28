import React, { Component } from 'react';
import { Input, Form, Progress, Button } from 'antd';
import Scroll from 'react-scroll';

import CaptorPreviewItem from './CaptorPreviewItem';

const { Element, Events, scrollSpy } = Scroll;
const { Item } = Form;

class CaptorPreview extends Component {
  render() {
    return (
      <div className="CaptorPreview">
        <div className="CaptorPreviewScrollable">
          <div className="CaptorElementsWrap">
            <CaptorPreviewItem active/>
            <CaptorPreviewItem />
            <CaptorPreviewItem />
          </div>
        </div>
        <div className="CaptorPrevewActions">
          <Progress percent={40} status="active" showInfo={false} />
          <Button size="large" type="primary" icon="down" style={{ marginLeft: '8px' }}/>
          <Button size="large" type="primary" icon="up" style={{ marginLeft: '8px' }}/>
        </div>
      </div>
    );
  }
}

export default CaptorPreview;
