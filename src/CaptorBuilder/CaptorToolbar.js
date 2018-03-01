import React, { Component } from 'react';
import CaptorFieldList from './CaptorFieldList';
import CaptorFieldSettings from './CaptorFieldSettings';
import CaptorLogicJump from './CaptorLogicJump';
import CaptorCalculator from './CaptorCalculator';

class CaptorToolbar extends Component {
  displayPanel = (panel) => {
    const { onToolbarClose } = this.props;
    switch(panel) {
      case 'fieldsList': return (<CaptorFieldList onToolbarClose={onToolbarClose}/>);
      case 'fieldSettings': return (<CaptorFieldSettings onToolbarClose={onToolbarClose}/>);
      case 'logicJump': return (<CaptorLogicJump onToolbarClose={onToolbarClose}/>);
      case 'calculator': return (<CaptorCalculator onToolbarClose={onToolbarClose}/>);
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
