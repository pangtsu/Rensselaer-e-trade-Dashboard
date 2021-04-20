import React from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { HistoryOutlined, DollarOutlined, BarsOutlined } from '@ant-design/icons';
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
  currentKey: string;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      dataArray: [],
      itemParams: {},
      currentKey: ""
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onCreateHandler = this.onCreateHandler.bind(this);
    this.handleSiderClick = this.handleSiderClick.bind(this);
  }

  componentDidMount(){
    this.getAll();
  }

  handleSiderClick = e => {
    console.log('click ', e);
    this.setState({
      currentKey: e.key,
    }, () => {
      console.log(this.state.currentKey);
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
    getAllItems()
      .then(res => {
        this.setState({
          dataArray: res.data
        }, () => {
          console.log(this.state.dataArray);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  private search() {
    searchItem(this.state.searchTerm)
      .then(res => {
        this.setState({
          dataArray: res.data
        }, () => {
          console.log(this.state.dataArray);
        });
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
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<BarsOutlined />} title="Category">
              <Menu.Item key="school">School Supplies</Menu.Item>
              <Menu.Item key="furniture">Furnitures</Menu.Item>
              <Menu.Item key="electronic">Electronics</Menu.Item>
              <Menu.Item key="others">Others</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<HistoryOutlined />} title="Date Posted">
              <Menu.Item key="today">Today</Menu.Item>
              <Menu.Item key="week">This Week</Menu.Item>
              <Menu.Item key="month">This Month</Menu.Item>
              <Menu.Item key="year">This Year</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<DollarOutlined />} title="Price Range">
              <Menu.Item key="1">Below 50</Menu.Item>
              <Menu.Item key="50">50-100</Menu.Item>
              <Menu.Item key="100">100-200</Menu.Item>
              <Menu.Item key="200">Above 200</Menu.Item>
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
              <Boardcontent dataArray={this.state.dataArray} />
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
