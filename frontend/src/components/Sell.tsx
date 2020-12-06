import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Modal, Button, Form, Input, Select, InputNumber } from "antd";

const { Option } = Select;

/*
TODO:
  Figure out how to access the input field values for
  the form and so we can change the states.

  Alternatively, if that's not working, change it to 
*/
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
      description: ""
    };
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
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
      price: this.state.price
    };
    console.log(params)
    this.props.onSubmitCallBack(params);
  }

  private handleCancel() {
    this.setState({ visible: false, name: "", category: "", price: -1, description: "" });
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
        <Button id="butt" onClick={this.showModal} style={{ color: "white" }}>
          Sell
        </Button>
        <Modal
          visible={visible}
          title="Create your new product"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="Cancel"
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
                placeholder="Please select category"
                onChange={this.onCategoryChange}
              >
                <Option value="furnitures">Furnitures</Option>
                <Option value="electronic devices">Electronic Devices</Option>
                <Option value="clothing-accesory">Clothing & Accesory</Option>
                <Option value="school-lab">School & Lab</Option>
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
          </Form>
        </Modal>
      </>
    );
  }
}