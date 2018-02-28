import React, { Component } from 'react';
import Scroll from 'react-scroll';
import classNames from 'classnames';

const { Element, Events, scrollSpy } = Scroll;

class CaptorPreviewItem extends Component {
  render() {
    const { active } = this.props;
    return (
      <Element name="fieldId-1" className={classNames('FieldCard', { active } )}>
        <label>What is your name</label>
        <input placeholder="Enter name" type="text"/>
      </Element>
    );
  }
}

export default CaptorPreviewItem;
