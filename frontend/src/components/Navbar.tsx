import React from "react";
import { Menu } from "antd";
import "./App.css";



export default class Navbar extends React.Component{


   
  render() {

    return (
            <Menu  mode="horizontal" theme = "dark" >
                <Menu.Item key="profile" >
                    Profile
                </Menu.Item>
                <Menu.Item key="Issues" >
                    Issues
                </Menu.Item>
                <Menu.Item key="logout" >
                    Logout
                </Menu.Item>
            </Menu>
    );
  }
}

