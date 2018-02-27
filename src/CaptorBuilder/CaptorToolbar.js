import React, { Component } from 'react';
import CaptorFieldList from './CaptorFieldList';
import CaptorFieldSettings from './CaptorFieldSettings';
import CaptorLogicJump from './CaptorLogicJump';
import CaptorCalculator from './CaptorCalculator';

class CaptorToolbar extends Component {
  displayPanel = (panel) => {
    switch(panel) {
      case 'fieldsList': return (<CaptorFieldList />);
      case 'fieldSettings': return (<CaptorFieldSettings />);
      case 'logicJump': return (<CaptorLogicJump />);
      case 'calculator': return (<CaptorCalculator />);
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
