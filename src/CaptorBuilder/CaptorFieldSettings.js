import React, { Component } from 'react';
import { Button, Switch, Input, InputNumber, Select, Slider, Upload } from 'antd';

const { Group } = Button;
const { Option } = Select;

class CaptorFieldSettings extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`CaptorFieldSettings ${className}`}>
        <div className="CaptorToolbarHeader CaptorPanelHeader">
          <div className="CaptorPanelHeader-title">
            <span>Field Settings</span>
            <Button icon="close-square" title="Close Panel" />
          </div>
          <div className="CaptorPanelHeader-actions">

              <Button icon="fork" title="Conditional Logic"/>
              <Button icon="calculator" title="Modifiers"/>
              <Button icon="copy" title="Duplicate Field"/>
              <Button icon="delete" title="Delete Field"/>

          </div>
        </div>
        <div className="CaptorToolbarBody has-actions">
          <div className="FieldSettings">
            <div className="FieldSettingItem">
              <label>Required</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Description</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Max Characters</label>
              <InputNumber/>
            </div>
            <div className="FieldSettingItem">
              <label>Label</label>
              <Input style={{ width: '150px'}}/>
            </div>
            <div className="FieldSettingItem">
              <label>Description</label>
              <Input style={{ width: '150px'}}/>
            </div>
            <div className="FieldSettingItem">
              <label>Welcome Button Text</label>
              <Input style={{ width: '150px'}}/>
            </div>
            <div className="FieldSettingItem">
              <label>Background Image</label>
              <Upload>
                <Button icon="upload">Upload Image</Button>
              </Upload>
            </div>
            <div className="FieldSettingItem">
              <label>Multiple Selection</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Randomize Order</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Add "Other" Option</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Button Text</label>
              <Input style={{ width: '148px' }}/>
            </div>
            <div className="FieldSettingItem">
              <label>Quotation Marks</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Start scale at 1?</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Steps (max: 11)</label>
              <InputNumber/>
            </div>
            <div className="FieldSettingItem">
              <div>
                <label>Show Labels</label>
                <div>
                  <Input placeholder="Left" style={{ marginTop: '12px' }}/>
                  <Input placeholder="Center" style={{ marginTop: '12px' }}/>
                  <Input placeholder="Right" style={{ marginTop: '12px' }}/>
                </div>
              </div>
            </div>
            <div className="FieldSettingItem">
              <label>Steps (1-10)</label>
              <InputNumber/>
            </div>
            <div className="FieldSettingItem">
              <label>Date Format</label>
              <Select style={{ width: '120px' }}>
                <Option value="mmddyyyy">MMDDYYYY</Option>
                <Option value="ddmmyyyy">DDMMYYYY</Option>
                <Option value="yyyymmdd">YYYYMMDD</Option>
              </Select>
            </div>
            <div className="FieldSettingItem">
              <label>Date Separator</label>
              <Select style={{ width: '50px' }}>
                <Option value="slash">/</Option>
                <Option value="hyphen">-</Option>
                <Option value="dot">.</Option>
              </Select>
            </div>
            <div className="FieldSettingItem">
              <label>Min</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Max</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Alphabetical Order?</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>From existing template</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Allow multiple "Thank you" screens</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Thank you Button Text</label>
              <Input style={{ width: '150px'}}/>
            </div>
            <div className="FieldSettingItem">
              <label>Redirect to URL?</label>
              <Switch />
            </div>
            <div className="FieldSettingItem">
              <label>Social Media Icons</label>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CaptorFieldSettings;
