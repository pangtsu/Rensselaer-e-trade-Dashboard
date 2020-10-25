import React from "react";
import Search from "./Search";

export interface Props {}

export interface State {
  searchTerm: string;
}

/*

Event Handlers Namings: 
  (when naming a function that is triggered by a component event)
  i.e.,
    - paginationEventHandler
    - onInputHandler
    etc

Callbacks namings:
  i.e.,
  - onSearchCallbacks


*/

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
        <Search onSearchCallBack={this.onSearchHandler} />
      </React.Fragment>
    );
  }
}
