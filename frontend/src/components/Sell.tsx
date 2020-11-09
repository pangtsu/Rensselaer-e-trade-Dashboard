import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Modal, Button, Form, Input, Select, InputNumber } from 'antd';

const  {Option} = Select;
export default class Sell extends React.Component {
  state = { visible: false, loading: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

 
  render() {
    const { visible, loading } = this.state;


    return (
        
      <>
        <Button id="butt" onClick = {this.showModal}  style={{ color: "white" }}>
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
            <Button key="Cancel" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}>
          <Form>
            <Form.Item name={['product', 'name']} label="Product Name" rules={[{required: true,},]}>
                <Input />
            </Form.Item>
            <Form.Item name="Category" label="Product Type" rules={[{required: true,},]}>
                    <Select placeholder="Please select category" >
                        <Option value="furnitures">furnitures</Option>
                        <Option value="electronic devices">electronic devices</Option>
                        <Option value="clothing-accesory">clothing&accesory</Option>
                        <Option value="books">books</Option>
                        <Option value="school-lab">school&lab</Option>
                    </Select>
            </Form.Item>
            <Form.Item name={['product', 'price']} label="Price"
                rules={[
                     {
                 required: true,
                 type: 'number',
                 min: 0,
                 max: 20000,},
                ]}>
                <InputNumber />
            </Form.Item>
                 <Form.Item name={['product', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
          </Form>
          </Modal>
      </>
    );
  }
}
