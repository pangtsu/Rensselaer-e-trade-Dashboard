import React from "react";
import { Menu, Typography } from "antd";
import "./App.css";
import Search from "./Search";
const { Title } = Typography;

export interface Props {
  onSearchCallBack(searchInput: any): void;
}

export interface State {}

export default class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  private onSearchHandler(searchInput: any) {
    console.log(searchInput);
    this.props.onSearchCallBack(searchInput);
  }

  render() {
    return (
      <div id="myNav">
        <Menu theme="dark">
          <div id="logo">
            <Title style={{ color: "white" }} level={1}>
              RED
            </Title>
          </div>
          <div id="searchbar">
            <Search onSearchCallBack={this.onSearchHandler} />
          </div>
          <div id="menu-chice" style={{ float: "right" }}>
            <Menu mode="horizontal" theme="dark">
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
        </Menu>
      </div>
    );
  }
}
