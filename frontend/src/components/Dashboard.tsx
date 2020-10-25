import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";

export interface Props {}

export interface State {
  searchTerm: string;
}



export default class Dashboard extends React.Component<Props, State> {
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
      <React.Fragment>
        <Navbar> 
        </Navbar>        
       <Search onSearchCallBack={this.onSearchHandler} /> 
      </React.Fragment>
    );
  }
}
