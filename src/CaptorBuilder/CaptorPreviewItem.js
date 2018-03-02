import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { Input } from 'antd';
import classNames from 'classnames';

import Text from './CaptorPreviewTypes/Text';
import MultipleChoice from './CaptorPreviewTypes/MultipleChoice';
import Date from './CaptorPreviewTypes/Date';
import Rating from './CaptorPreviewTypes/Rating';
import Dropdown from './CaptorPreviewTypes/Dropdown';
import Textarea from './CaptorPreviewTypes/Textarea';
import File from './CaptorPreviewTypes/File';

const { Element, Events, scrollSpy } = Scroll;

class CaptorPreviewItem extends Component {
  displayPreviewField = (type) => {
    switch(type) {
      case 'TEXT': return (<Text />);
      case 'MULTIPLE': return (<MultipleChoice />);
      case 'DATE': return (<Date />);
      case 'RATING': return (<Rating />);
      case 'DROPDOWN': return (<Dropdown />);
      case 'TEXTAREA': return (<Textarea />);
      case 'FILE': return (<File />);
      default: return (<Text />);
    }
  }
  render() {
    const { id, active, type, title } = this.props;
    return (
      <Element name={id} className={classNames('FieldCard', { active } )}>
        <label>{title}</label>
        {this.displayPreviewField(type)}
      </Element>
    );
  }
}

export default CaptorPreviewItem;
