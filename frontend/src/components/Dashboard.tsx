import React from "react";
import { Layout, Breadcrumb } from "antd";
import "./App.css";
const { Header, Content, Footer } = Layout;
import Navbar from "./Navbar";
import Selectionb from "./Selectionb"

import Sell from "./Sell";
import Boardcontent from "./boardcontent";
import { searchItem } from "./../utils/search";
import { createItem } from "./../utils/create";
import { getImage } from "./../utils/getImage";
import { object } from "prop-types";

export interface Props {}

export interface State {
  searchTerm: string;
  dataArray: any;
  itemParams: any;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      dataArray: [],
      itemParams: {}
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

  private onCreateHandler(itemParams: any) {
    this.setState({
      itemParams: itemParams
    });
    this.create();
  }


  private fetchImage(itemArray: any) {
    itemArray.forEach(element => {
      console.log("print this json object...");
      console.log(element);
      if (element.imageids.length > 0){
        getImage(element.imageids[0].toString())
          .then(res => {
            element.image = res.data;
          })
          .catch(error => {
            console.log(error);
          });      
        }
    });
  }

  
  private search() {
    searchItem(this.state.searchTerm)
      .then(res => {
        this.fetchImage(res.data);
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
    console.log(this.state.itemParams);
    createItem(this.state.itemParams)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div id="mydash">
        <Layout>
          <>
            <Header id="header" style={{ background: "#fff" }}>
              <Navbar onSearchCallBack={this.onSearchHandler} />
              <Selectionb />
                
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
