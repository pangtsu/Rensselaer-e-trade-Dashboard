import React from "react";
import { Menu,Typography } from "antd";
import "./App.css";

const {Title} = Typography;

export default class Navbar extends React.Component{
   
  render() {

    return (
        <div id = "myNav">
            <div id = "logo">
            <Title level={2}>RED</Title>
            </div>
            <Menu  mode="horizontal" theme = "dark" >
                <Menu.Item key="profile">
                    <a href="">Profile</a>
                </Menu.Item>
                <Menu.Item key="issues">
                    <a href="">Issues</a>
                </Menu.Item>
                <Menu.Item key="logout">
                    <a href="">Logout</a>
                </Menu.Item>
            </Menu>
       </div>
    );
  }
}

