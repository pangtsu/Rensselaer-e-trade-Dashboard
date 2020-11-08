import React from "react";
import { Layout, Button } from "antd";
import "./App.css";
const { Header, Content } = Layout;
import Navbar from "./Navbar";
import Filter from "./Filter";

export interface Props {}

export interface State {
  searchTerm: string;
}

export default class Dashboard extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  private onSearchHandler(searchInput: any) {
    this.setState({
      searchTerm: searchInput
    });
  }

  render() {
    return (
      <div id="mydash">
        <Layout>
          <Header id="header" style={{ background: "#f0f2f5" }}>
            <Navbar onSearchCallBack={this.onSearchHandler} />
            <div className="sell">
              <div className="buttonsell">
                <Button id="butt" style={{ color: "white" }}>
                  Sell
                </Button>
              </div>
            </div>
          </Header>

          <Filter />

          <Content />
        </Layout>
      </div>
    );
  }
}
