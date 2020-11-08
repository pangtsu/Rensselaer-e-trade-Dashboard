
  
import React from "react";
import { Form,DatePicker,Select, Button} from "antd";

import "./App.css";


const  {Option} = Select;


export default class Filter extends React.Component{
 onFinish = (fieldsValue:any) => {
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      
    };
    console.log('Received values of form: ', values);
};
  render() {

    return (
        <>
        <div className="filter">
            <Form name="filter-date" onFinish={this.onFinish}>
                <Form.Item name="date-picker" id="start-date">
                    <DatePicker />
                </Form.Item>
                <Form.Item name="date-picker" id="end-date">
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name="select"
                    label="Select"
                    id = "select">
                    <Select placeholder="Please select a price range" style={{ width: 120 }}>
                        <Option value="below-50">below 50</Option>
                        <Option value="50-100">50-100</Option>
                        <Option value="100-200">100-200</Option>
                        <Option value="200-500">200-500</Option>
                        <Option value="above-500">above 500</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="Category"
                    label="Category"
                    id = "category">
                    <Select placeholder="Please select category" style={{ width: 200 }}>
                        <Option value="furnitures">furnitures</Option>
                        <Option value="electronic devices">electronic devices</Option>
                        <Option value="clothing-accesory">clothing&accesory</Option>
                        <Option value="books">books</Option>
                        <Option value="school-lab">school&lab</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" id = "apply">
                    apply
                </Button>
                <Button type="primary" htmlType="submit" id = "cancel">
                    cancel
                </Button>
      </Form.Item>
            </Form>
        </div>

            <div className="display">
        </div>
        </>
    ); 
   }
}