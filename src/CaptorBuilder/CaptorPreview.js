import React, { Component } from 'react';
import { Input, Form } from 'antd';
import Scroll from 'react-scroll';

const { Element } = Scroll;
const { Item } = Form;

class CaptorPreview extends Component {

  render() {
    return (
      <div className="CaptorPreview">
        <div className="CaptorPreviewScrollable">
          <Element name="fieldId-1" className="FieldCard">
            <label>What is your name</label>
            <input placeholder="Enter name" type="text"/>
          </Element>
        </div>
      </div>
    );
  }
}

export default CaptorPreview;
