import React, { Component } from 'react';
import { Upload, Button } from 'antd';

class File extends Component {
  render() {
    return (
      <Upload>
        <Button size="large" icon="upload">Upload</Button>
      </Upload>
    );
  }
}

export default File;
