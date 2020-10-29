import React from "react";
import { Layout,Button } from 'antd';
import "./App.css";
const { Header,  Content } = Layout;
import Navbar from "./Navbar";
import  Filter from "./Filter";


export const App = () => (
  <div className = "APP">
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
