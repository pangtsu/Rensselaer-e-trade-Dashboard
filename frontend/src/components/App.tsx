import React from "react";
import { Layout } from 'antd';
import "./App.css";
const { Header, Footer, Content } = Layout;
import Navbar from "./Navbar";


export const App = () => (
  <div className = "APP">
      <Layout>
        <Header id = "header" style = {{background : '#f0f2f5'}}>
            <Navbar />
        </Header>
        <Content>dash</Content>
        <Footer>Footer</Footer>
    </Layout>
  </div>
);
