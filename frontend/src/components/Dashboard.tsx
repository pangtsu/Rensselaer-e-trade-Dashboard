import React from "react";
import { Layout, Breadcrumb } from "antd";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
import Navbar from "./Navbar";
//import Siderf from "./Siderf";
import Sell from "./Sell";
import Boardcontent from "./boardcontent";
import { searchItem } from "./../utils/search";

export interface Props {}

export interface State {
  searchTerm: string;
  dataArray: any;
  createParams: any;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      dataArray: [],
      createParams: {}
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onCreateHandler = this.onCreateHandler.bind(this);
  }

  private onSearchHandler(searchInput: any) {
    this.setState({
      searchTerm: searchInput
    });
    this.search();
  }

  private onCreateHandler(createParams: any) {
    this.setState({
      createParams: createParams
    });
    this.create();
  }

  private search() {
    searchItem(this.state.searchTerm)
      .then(res => {
        this.setState({
          dataArray: res.data
        });
        console.log(this.state.dataArray);
      })
      .catch(error => {
        console.log(error);
      });
  }

  private create() {
    console.log(this.state.createParams);
  }

  render() {
    return (
      <div id="mydash">
        <Layout>
          <>
            <Header id="header" style={{ background: "#f0f2f5" }}>
              <Navbar onSearchCallBack={this.onSearchHandler} />
              <div className="sell">
                <div className="buttonsell">
                  <Sell onSubmitCallBack={this.onCreateHandler} />
                </div>
              </div>
            </Header>
          </>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Product</Breadcrumb.Item>
            </Breadcrumb>
            <div className="board">
              <Boardcontent dataArray={this.state.dataArray} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            RED ©2020 Created by Rensselaer-e-Dashboard
          </Footer>
        </Layout>
      </div>
    );
  }
}
