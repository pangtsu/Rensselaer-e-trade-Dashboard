
  
import React from "react";
import { DatePicker,Select,Card, Button, Row, Col} from "antd";

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
        
        <div className="filter">
           <Card style = {{width: '100%' }}>
                <Row gutter = {40} justify = "center">
                    <Col span = {6}>
                        <DatePicker name="date-picker" id="start-date"/>
                    </Col>
                    <Col span = {6}>
                        <DatePicker name="date-picker" id="end-date" />
                    </Col>
                </Row>
                <Row gutter = {40} justify = "center">
                    <Select placeholder="Select a price range" 
                    id = "select" style={{ width: 170 }}>
                        <Option value="below-50">below 50</Option>
                        <Option value="50-100">50-100</Option>
                        <Option value="100-200">100-200</Option>
                        <Option value="200-500">200-500</Option>
                        <Option value="above-500">above 500</Option>
                    </Select>
               
          
                    <Select placeholder="Select category" 
                    id = "category" style={{ width: 170 }}>
                        <Option value="furnitures">furnitures</Option>
                        <Option value="electronic devices">electronic devices</Option>
                        <Option value="clothing-accesory">clothing&accesory</Option>
                        <Option value="books">books</Option>
                        <Option value="school-lab">school&lab</Option>
                    </Select>
                </Row>
                <Row justify = "end" gutter = {4}>
                    <Button type="primary" htmlType="submit" id = "apply">
                        apply
                    </Button>
                    <Button type="primary" htmlType="submit" id = "cancel">
                        cancel
                    </Button>
                </Row>
            </Card>
      </div>
     
    ); 
   }
}