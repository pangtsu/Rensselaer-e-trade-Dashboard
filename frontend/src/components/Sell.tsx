import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import UploadFile from './UploadFile';
import { Modal, Button, Form, Input, Select, InputNumber, message } from "antd";

const { Option } = Select;


export interface Props {
  onSubmitCallBack(params: any): void;
}

export interface State {
  visible: boolean;
  loading: boolean;
  category: string;
  name: string;
  price: number;
  description: string;
  imageIDs: any
}
export default class Sell extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      category: "",
      name: "",
      price: -1,
      description: "",
      imageIDs: []
    };
    this.showModal = this.showModal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.UploadImageHandler = this.UploadImageHandler.bind(this);
  }

private UploadImageHandler(imageIDs: any) {
  this.setState({imageIDs: imageIDs}, () => {
    console.log("image upload handler: "+this.state.imageIDs);
  });
}

  private showModal() {
    this.setState({
      visible: true
    });
  }

  private handleOk() {
    const params = {
      itemName: this.state.name,
      category: this.state.category,
      price: this.state.price,
      descriptions: this.state.description,
      imageIDs: this.state.imageIDs
    };
    this.props.onSubmitCallBack(params);
    this.setState({
      visible: false
    });
    message.info('You have inserted an item.');
  }

  private handleClear() {
    this.setState({ visible: false, name: "", category: "", price: -1, description: "", imageIDs: []});
  }

  // event triggers for input changes

  private onNameChange = ({ target: { value } }) => {
    const val = {value}
    this.setState({ name: val.value })
  };

  private onCategoryChange(value: any) {
    this.setState({ category: value });
  }

  private onPriceChange(value: any) {
    this.setState({ price: value });
  }

  private onDescriptionChange = ({ target: { value } }) => {
    const val = {value}
    this.setState({ description: val.value })
  };

  render() {
    const { visible, loading } = this.state;

    return (
      <>
        <Button id="butt" type='primary' danger onClick={this.showModal} size="large">
          Sell
        </Button>
        <Modal
          visible={visible}
          title="Submit A New Product"
          onOk={this.handleOk}
          onCancel={this.handleClear}
          footer={[
            <Button key="back" onClick={this.handleClear}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <Form>
            <Form.Item
              name="name"
              label="Product Name"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={1} onChange = {this.onNameChange}/>
            </Form.Item>
            <Form.Item
              name="category"
              label="Product Type"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Please Select a Category"
                onChange={this.onCategoryChange}
              >
                <Option value="Furnitures">Furnitures</Option>
                <Option value="Electronic Devices">Electronic Devices</Option>
                <Option value="Clothing">Clothings & Accesories</Option>
                <Option value="School Supplies">School Supplies</Option>
                <Option value="Entertainments">Entertainments</Option>
                <Option value="Others">Others</Option>

              </Select>
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 20000
                }
              ]}
            >
              <InputNumber onChange = {this.onPriceChange} />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: false }]}
            >
              <Input.TextArea rows={4} onChange = {this.onDescriptionChange} />
            </Form.Item>
            <Form.Item
              name="pic"
              label="Upload Picture"
              rules={[{ required: true }]}
            >
              <UploadFile onUploadCallBack={this.UploadImageHandler}/>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}