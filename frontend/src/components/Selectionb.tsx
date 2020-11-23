
  
import React from "react";
import {  Menu} from "antd";
import { KeyOutlined, DashboardOutlined, SkinOutlined } from '@ant-design/icons';
import "./App.css";

const { SubMenu } = Menu;


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
            <Menu mode="horizontal">
                <SubMenu key="sub1" icon={<KeyOutlined />} title="price">
                    <Menu.Item key="1">below 50</Menu.Item>
                     <Menu.Item key="2">50-100</Menu.Item>
              <Menu.Item key="3">100-200</Menu.Item>
              <Menu.Item key="4">above 200</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<SkinOutlined />} title="category" >
              <Menu.Item key="5">book</Menu.Item>
              <Menu.Item key="6">furnitures</Menu.Item>
              <Menu.Item key="7">e-devices</Menu.Item>
              <Menu.Item key="8">accessory</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<DashboardOutlined />} title="time span">
              <Menu.Item key="9">today's new</Menu.Item>
              <Menu.Item key="10">this week</Menu.Item>
              <Menu.Item key="11">this monsth</Menu.Item>
              <Menu.Item key="12">this semester</Menu.Item>
              <Menu.Item key="13">past </Menu.Item>
            </SubMenu>
            </Menu>
                 
      </div>
     
    ); 
   }
}