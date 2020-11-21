import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Modal, Button, Form, Input, Select, InputNumber } from "antd";

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
}
export default class Sell extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      category: "",
      name: "",
      price: 0
    };
    this.showModal = this.showModal.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  private showModal() {
    this.setState({
      visible: true
    });
  }

  private handleOk() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
    console.log(this.state.category);
    console.log(this.state.name);
  }

  private handleCancel() {
    this.setState({ visible: false });
  }

  private onCategoryChange(value: any) {
    this.setState({ category: value });
  }

  private onValuesChange = (changedValues: any, allValues: any) => {
    console.log(changedValues);
    console.log(allValues);
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
              <Input />
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
                <Option value="furnitures">furnitures</Option>
                <Option value="electronic devices">electronic devices</Option>
                <Option value="clothing-accesory">clothing&accesory</Option>
                <Option value="books">books</Option>
                <Option value="school-lab">school&lab</Option>
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
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: false }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
