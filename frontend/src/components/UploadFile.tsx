import React from "react";
import "./App.css";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export interface Props {
}

export interface State {
  fileList: any;
  fileIds: any;
}

/*
const props = {
  action: 'http://localhost:8080/api/file/upload',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [],
};
*/
export default class UploadFile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fileList: [],
      fileIds: []
    };
  }

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    fileList = fileList.map(file => {
      if (file.response) {
        // the post req for uploaded file turns the id of the file
        file.res = file.response.msg;
      }
      return file;
    });
    var fileId = [];
    for (var i=0; i<fileList.length; i++){
      var obj = fileList[i];
      fileId.push(obj.res);
    }

    this.setState({ fileList });

    console.log(this.state.fileList);
    console.log(fileId);

  };
  

  render() {
    const props = {
      action: 'http://localhost:8080/api/file/upload',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
     
    <Upload {...props} fileList={this.state.fileList}>
        <Button icon={<UploadOutlined />}>Upload Image Only</Button>
      </Upload>
    
    );
  }
}


