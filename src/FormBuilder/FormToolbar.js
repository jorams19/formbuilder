import React, { Component } from 'react';
import { Tabs, Card, Input } from 'antd';
import classNames from 'classnames';
import FormFieldList from './FormFieldList';
import FormToolbarFieldForm from './FormToolbarFieldForm';
import CaptorSettings from './CaptorSettings';

const { TabPane } = Tabs;

class FormToolbar extends Component {
  state = {
    forms: undefined,
    fieldData: undefined,
  }
  componentWillMount() {
    this.setState({
      forms: this.props.forms,
      fieldData: this.props.fieldData,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      forms: nextProps.forms,
      fieldData: nextProps.fieldData,
    });
  }
  searchFieldData = (forms, fieldData) => {
    const { container_id, form_id, field_id } = fieldData;
    const getForm = forms[container_id].find(form => form.id === form_id);
    return getForm.fields.find(field => field.id === field_id);
  }
  render() {
    const { handleChanges, visible } = this.props;
    const { forms, fieldData } = this.state;
    let getFieldData = undefined;
    // debugger;
    if(fieldData) {
      const { container_id, form_id } = fieldData;
      getFieldData = this.searchFieldData(forms, fieldData);
    }
    console.log(this.props.fieldData);
    return (
      <div className={classNames('FormToolbar', { visible: visible })}>
        <Card
          title="Edit Field"
          className="FormToolbarCard"
        >
          <FormToolbarFieldForm
            indexData={fieldData}
            fieldData={getFieldData}
            handleChanges={(indexData, values) => handleChanges(indexData, values)}
          />
        </Card>
      </div>
    );
  }
}

export default FormToolbar;
