import React from "react";
import { Layout,Button } from 'antd';
import "./App.css";
const { Header,  Content } = Layout;
import Navbar from "./Navbar";
import  Filter from "./Filter";




export default class Dashboard extends React.Component{
   

  render() {

    return (
        <div id = "mydash">
           <Layout>
        <Header id = "header" style = {{background : '#f0f2f5'}}>
            <Navbar />
            <div className = "sell">
              <div className = "buttonsell">
              <Button id = "butt" style = {{color:'white'}}>Sell</Button>
              </div>
            </div>
        </Header>
        
        <Content id = "content">
                <Filter />  
        </Content>
  
    </Layout>
        </div>
    ); 
   }
}
