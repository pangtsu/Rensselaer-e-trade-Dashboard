import React from "react";
import { Layout} from "antd";
import "./App.css";
const { Header, Content } = Layout;
import Navbar from "./Navbar";
import Filter from "./Filter";
import Sell from "./Sell";
import { searchItem } from "./../utils/search";

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
    this.search();
  }

  private search() {
    searchItem(this.state.searchTerm);
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
                <Sell />
              </div>
            </div>
          </Header>
          <Filter />
          </>
          <Content />
        </Layout>
      </div>
    );
  }
}
