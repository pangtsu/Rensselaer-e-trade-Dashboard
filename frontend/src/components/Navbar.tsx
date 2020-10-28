import React from "react";
import { Menu,Typography } from "antd";

import "./App.css";

const {Title} = Typography;

export interface Props {}

export interface State {
  searchTerm: string;
}




export default class Navbar extends React.Component<Props, State>{
   
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
        <div id = "myNav">
            <Menu theme = "dark">
            <div id = "logo">
                <Title style={{color: 'white'}} level={2}>RED</Title>
            </div>
            <div id = "searchbar">
               
            </div>
            <div id = "menu-chice" style ={{float:'right'}}>
                <Menu  mode="horizontal" theme = "dark"  >               
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

