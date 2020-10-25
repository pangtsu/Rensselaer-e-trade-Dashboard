import React from "react";
import { Input } from "antd";
import "./App.css";

export interface Props {
  onSearchCallBack(searchInput: any): void;
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

  private onSearch(searchInput: any) {
    console.log(searchInput);
    this.props.onSearchCallBack(searchInput);
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
