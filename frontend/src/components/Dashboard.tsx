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
import { getImage } from "./../utils/getImage";
import { getAllItems } from "./../utils/getAll";

export interface Props {}

export interface State {
  searchTerm: string;
  dataArray: any;
  itemParams: any;
  collapsed: boolean;
}

export default class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: "",
      dataArray: [],
      itemParams: {},
      collapsed: false
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onCreateHandler = this.onCreateHandler.bind(this);
    this.onCollapse = this.onCollapse.bind(this);
  }

  componentDidMount(){
    this.getAll();
  }

  private onCollapse(){
    const curr = this.state.collapsed;
    this.setState({ collapsed : !curr });
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
      if (element.imageids && element.imageids.length > 0){
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

  private getAll() {
    getAllItems()
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
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<BarsOutlined />} title="Category">
              <Menu.Item key="1">School Supplies</Menu.Item>
              <Menu.Item key="2">Furnitures</Menu.Item>
              <Menu.Item key="3">Electronics</Menu.Item>
              <Menu.Item key="4">Others</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<HistoryOutlined />} title="Date Posted">
              <Menu.Item key="5">Today</Menu.Item>
              <Menu.Item key="6">This Week</Menu.Item>
              <Menu.Item key="7">This Month</Menu.Item>
              <Menu.Item key="8">This Year</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<DollarOutlined />} title="Price Range">
              <Menu.Item key="9">Below 50</Menu.Item>
              <Menu.Item key="10">50-100</Menu.Item>
              <Menu.Item key="11">100-200</Menu.Item>
              <Menu.Item key="12">Above 200</Menu.Item>
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
