import React, { Component } from 'react';
import { Tabs, Card, Input } from 'antd';
import classNames from 'classnames';
import FormFieldList from './FormFieldList';
import FormToolbarFieldForm from './FormToolbarFieldForm';
import CaptorSettings from './CaptorSettings';

const { TabPane } = Tabs;

class FormToolbar extends Component {
  render() {
    const { visible, fieldData, onChange } = this.props;
    // console.log(fieldData);
    return (
      <div
        className={classNames('FormToolbar', { visible: visible })}
      >
        <Card
          title="Edit Field"
          className="FormToolbarCard"
        >
          <FormToolbarFieldForm
            fieldData={fieldData}
            onFieldUpdate={(indexData, values) => onChange(indexData, values)}
          />
        </Card>
      </div>
    );
  }
}

export default FormToolbar;
