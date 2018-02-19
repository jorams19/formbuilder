import React, { Component } from 'react';
import paper from 'paper';
import { uniq } from 'lodash';
import update from 'immutability-helper';
import { message } from 'antd';
import FormContainer from './FormContainer';
import FormToolbar from './FormToolbar';

class FormArea extends Component {
  state = {
    renderedForms: [],
    isDisplayed: false,
    currentFieldEditData: undefined,
    forms: [{
      id: 't20nlPe',
      helpText: null,
      confirmationButton: {
        text: 'Submit'
      },
      fields: [{
        id: '123asdasd',
        type: 'SHORT_TEXT',
        label: 'Full Name',
        required: true,
      }],
      target: {
        fieldId: '123asdasd',
        conditions: {
          ['value1']: '3k2123',
          ['value2']: 'hiuue8',
        }
      },
    }, [{
      id: '3k2123',
      helpText: null,
      confirmationButton: {
        text: 'Submit',
      },
      fields: [],
      target: [],
    }, {
      id: 'hiuue8',
      helpText: null,
      confirmationButton: {
        text: 'Submit'
      },
      fields: [{
        id: 'oojoewj',
        type: 'EMAIL_ADDRESS',
        label: 'Email Address',
        required: true,
      }],
    }], {
      id: '432sfd',
      helpText: null,
      confirmationButton: {
        text: 'Submit'
      },
      fields: [{
        id: 'full_name',
        type: 'SHORT_TEXT',
        label: 'Full Name',
        required: true,
      }],
      target: {
        ['value1']: '3k2123',
        ['value2']: 'hiuue8',
      },
    }],
  };

  getFormIndex = (forms, formId) => {
    return forms.findIndex((form) => {
      return form.id === formId;
    });
  }

  getFormData = (forms, formId) => {
    if(Array.isArray(forms)) {
      return forms.find((form) => {
        return form.id === formId;
      });
    } else {
      return forms;
    }
  }

  transformToArrays = (forms) => {
    return forms.map((form) => {
      if(!Array.isArray(form)) {
        return [{...form}];
      }
      return form;
    });
  }

  removeForm = (currentForms, prevCont, formIndex) => {
    return update(currentForms, {
      [prevCont]: {
        $splice: [[formIndex, 1]]
      }
    });
  }

  pushForm = (currentForms, nextCont, formData) => {
    return update(currentForms, {
      [nextCont]: {
        $push: [{
          ...formData,
        }],
      }
    });
  }

  handleDropForm = (containerIndexes, formId) => {

    const { forms } = this.state;
    const { prevCont, nextCont } = containerIndexes;
    const formArray = this.transformToArrays(forms);
    const getForm = this.getFormData(formArray[prevCont], formId);
    const getFormIndex = this.getFormIndex(formArray[prevCont], formId);
    let updatedContainers = [];

    updatedContainers = this.pushForm(formArray, nextCont, getForm);
    updatedContainers = this.removeForm(updatedContainers, prevCont, getFormIndex);

    this.setState({
      forms: updatedContainers,
    });
  }

  handleDropField = (prevForm, nextForm, values) => {
    let updatedForms = [];
    const { forms } = this.state;
    const formArray = this.transformToArrays(forms);
    const formIndex = this.getFormIndex(formArray[nextForm.parent_id], nextForm.id);
    updatedForms = update(formArray, {
      [nextForm.parent_id]: {
        [formIndex]: {
          fields: {
            $push: [{
              id: values.id,
              label: values.label,
              type: values.type,
            }],
          }
        }
      }
    });

    if(prevForm !== undefined) {
      const prevFormIndex = this.getFormIndex(formArray[prevForm.parent_id], prevForm.id);
      const parentForm = formArray[prevForm.parent_id];
      const fieldIndex = parentForm[prevFormIndex].fields.findIndex(f => f.id === values.id);
      updatedForms = update(updatedForms, {
        [prevForm.parent_id]: {
          [prevFormIndex]: {
            fields: {
              $splice: [[fieldIndex, 1]],
            }
          }
        }
      });
    }

    this.setState({
      forms: updatedForms,
    });
  }

  handleFieldDataChanges = (indexData, values) => {
    const { forms } = this.state;
    const formArray = this.transformToArrays(forms);
    const { container_id, form_id, field_id } = indexData;
    const formIndex = this.getFormIndex(formArray[container_id], form_id);
    const fieldIndex = formArray[container_id][formIndex].fields.findIndex((field) => {
      return field.id === field_id;
    });
    const updatedForm = update(formArray, {
      [container_id]: {
        [formIndex]: {
          fields: {
            [fieldIndex]: {
              $merge: {
                ...values,
              }
            }
          }
        }
      }
    });

    this.setState({
      forms: updatedForm,
    });
  }

  handleFieldClick = (data) => {
    console.log(data);
    this.setState({
      isDisplayed: true,
      currentFieldEditData: data,
    });
  }

  render() {
    const { renderedForms, forms, isDisplayed, currentFieldEditData } = this.state;
    const formArray = this.transformToArrays(forms);
    return (
      <div className="test">
        <header className="FormEditorHeader">
          <div className="CaptorTitle">
            <h3>Captor Title</h3>
          </div>
          <div className="CaptorActions">
            <button>Save</button>
          </div>
        </header>
        <div className="FormWrap">
          <div className="FormAreaScrollable" ref={(container) => this.containerRef = container }>
            <div id="FormArea">
              {formArray.map((form, index) => (
                <FormContainer
                  key={index}
                  forms={form}
                  containerIdx={index}
                  onDropFormItem={(containerIndexes, formId) => this.handleDropForm(containerIndexes, formId)}
                  onDropField={(lastFormID, formID, values) => this.handleDropField(lastFormID, formID, values) }
                  onFieldClick={(data) => this.handleFieldClick(data)}
                />
              ))}
            </div>
          </div>
          <FormToolbar
            forms={formArray}
            fieldData={currentFieldEditData}
            visible={isDisplayed}
            handleChanges={(indexData, values) => this.handleFieldDataChanges(indexData, values)}
          />
        </div>
      </div>
    );
  }
}

export default FormArea;
