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
     
        <Input.Search
          style={{ width: 300 }}
          placeholder="What ya looking for today?"
          allowClear
          size="middle"
          onSearch={this.onSearch}
        />
    
    );
  }
}
