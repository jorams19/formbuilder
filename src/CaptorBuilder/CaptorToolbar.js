import React, { Component } from 'react';
import CaptorFieldList from './CaptorFieldList';
import CaptorFieldSettings from './CaptorFieldSettings';

class CaptorToolbar extends Component {
  displayPanel = (panel) => {
    switch(panel) {
      case 'fieldsList': return (<CaptorFieldList />);
      case 'fieldSettings': return (<CaptorFieldSettings />);
      default: return (<CaptorFieldList />);
    }
  }
  render() {
    const { panel } = this.props;
    return (
      <div {...this.props}>
        {this.displayPanel(panel)}
      </div>
    );
  }
}

export default CaptorToolbar;
