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
}
export default class Sell extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
      category: "",
      name: "",
      price: -1
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
    //this.setState({ loading: true });
    //setTimeout(() => {
    //  this.setState({ loading: false });
    //}, 3000);
    const params = {
      itemName: this.state.name,
      category: this.state.category,
      price: this.state.price
    };
    this.props.onSubmitCallBack(params);
  }

  private handleCancel() {
    this.setState({ visible: false, name: "", category: "", price: -1 });
  }

  private onCategoryChange(value: any) {
    this.setState({ category: value });
  }

  // event triggers for input changes
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
          <form>
           
            <label>Product Name   
              <input type = "text" name = "name" />
            </label> 

            <label>Select a category
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
            </label>  

            <label>Price
              <InputNumber />
            </label> 

            <label>Description
              <Input.TextArea />
            </label>

          </form>
        </Modal>
      </>
    );
  }
}
