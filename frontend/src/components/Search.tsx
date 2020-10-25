import React from "react";
import { Input } from "antd";
//import "antd/es/input/style/index.css";
import "./App.css";

export interface Props {
  onSearchCallBack(value: any): void;
}

export interface State {
  searchInput: string;
}

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.onSearch = this.onSearch.bind(this);
  }

  private onSearch(value: any) {
    console.log(value);
    this.props.onSearchCallBack(value);
  }

  render() {
    return (
      <React.Fragment>
        <Input.Search
          placeholder="Search Your Item"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
      </React.Fragment>
    );
  }
}
