import React from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { HistoryOutlined, DollarOutlined, BarsOutlined, ShoppingOutlined } from '@ant-design/icons';
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;
import Search from "./Search";
import Sell from "./Sell";
import Boardcontent from "./boardcontent";
import { searchItem } from "./../utils/search";
import { createItem } from "./../utils/create";
import { getAllItems } from "./../utils/getAll";

export interface Props {}

export interface State {
  searchTerm: string;
  dataArray: any;
  itemParams: any;
  currentKey: any;
  AllItems: any;
  isLoading: any;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      dataArray: [],
      itemParams: {},
      currentKey: [],
      AllItems: [],
      isLoading: false
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onCreateHandler = this.onCreateHandler.bind(this);
    this.handleSiderClick = this.handleSiderClick.bind(this);
  }

  componentDidMount(){
    this.getAll();
  }

  handleSiderClick = e => {
    //console.log('click ', e);
    if (e.key == "all"){
      this.getAll();
    }
    this.setState({
      dataArray: this.state.AllItems,
      currentKey: e.keyPath,
    }, () => {
      console.log("hey");
    });
  };

  private onSearchHandler(searchInput: any) {
    this.setState({
      searchTerm: searchInput
    }, () => {
      this.search();
    });
  }

  private onCreateHandler(itemParams: any) {
    this.setState({
      itemParams: itemParams
    }, () =>{
      this.create();
    });
  }

  private getAll() {
    this.setState({
      isLoading: true
    }, () =>{
      getAllItems()
      .then(res => {
        this.setState({
          dataArray: res.data,
          AllItems: res.data,
          isLoading: false
        }, () => {
          console.log(this.state.dataArray);
        });
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  
  
  private search() {
    this.setState({
      isLoading: true
    }, () =>{
      searchItem(this.state.searchTerm)
      .then(res => {
        this.setState({
          dataArray: res.data,
          isLoading: false
        }, () => {
          console.log(this.state.dataArray);
        });
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  private create() {
    createItem(this.state.itemParams)
      .then(res => {
          console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    
    return (
      <Layout>
      <Header className="site-layout-background" style={{ padding: 0 }}>
          <div id="logo">
            <Title level={1}>
              <p className='logo-color' >RED</p>
            </Title>
          </div>
          <div id="searchbar">
            <Search onSearchCallBack={this.onSearchHandler} />
          </div>
          <div className="sell">
            <Sell onSubmitCallBack={this.onCreateHandler} /> 
          </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"> <a href="/">Home</a></Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          <Menu.Item key="3">Login</Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[]}
            selectedKeys={[this.state.currentKey]}
            onClick={this.handleSiderClick}
            defaultOpenKeys={['category', 'date', 'price']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="all" icon={<ShoppingOutlined />}>All products</Menu.Item>
            <SubMenu key="category" icon={<BarsOutlined />} title="Category">
              <Menu.Item key="School Supplies">School Supplies</Menu.Item>
              <Menu.Item key="Furnitures">Furnitures</Menu.Item>
              <Menu.Item key="Electronic Devices">Electronic Devices</Menu.Item>
              <Menu.Item key="Clothing">Clothings & Accesories</Menu.Item>
              <Menu.Item key="Entertainments">Entertainments</Menu.Item>
              <Menu.Item key="Others">Others</Menu.Item>
            </SubMenu>
            <SubMenu key="date" icon={<HistoryOutlined />} title="Date Posted">
              <Menu.Item key="today">Today</Menu.Item>
              <Menu.Item key="7">Past 7 days</Menu.Item>
              <Menu.Item key="30">Past 30 days</Menu.Item>
              <Menu.Item key="183">Past 6 months</Menu.Item>
            </SubMenu>
            <SubMenu key="price" icon={<DollarOutlined />} title="Price Range">
              <Menu.Item key="0-50">Below 50</Menu.Item>
              <Menu.Item key="50-100">50-100</Menu.Item>
              <Menu.Item key="100-200">100-200</Menu.Item>
              <Menu.Item key="200-x">Above 200</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>New Posted</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="board">
              <Boardcontent curFilterKey={this.state.currentKey} isArrayLoading={this.state.isLoading} dataArray={this.state.dataArray} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            RED ©2020 Created by Rensselaer-e-Dashboard
          </Footer>
        </Layout>
      </Layout>
    </Layout>
    );
  }
}
