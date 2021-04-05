import React from "react";
import "./App.css";
import { List, Avatar } from "antd";

export interface Props {
  dataArray: any;
}

export interface State {}

export default class boardcontent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={this.props.dataArray}
        footer={
          <div>
            <b>search results found:</b> {this.props.dataArray.length}
          </div>
        }
        renderItem={item => (
          <List.Item
            // There will be compiler warning or error with "unknown object"
            // due to typescript object syntax but just ignore it for now
            key={item ? item.itemname : "none"}
            extra={
              <img
                width={400}
                alt="logo"
                
                //{`data:image/png;base64,${this.state.image}`}
                src={item? `data:image/png;base64,${item.image}` : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                />
              }
              title={
                <a href={"https://ant.design"}>
                  {item ? item.itemname + " ( $" +  item.price + " )": "none"}
                </a>
              }
              description={item ? item.category : "none"}
            />
            {item ? item.descriptions : "none"}
          </List.Item>
        )}
      />
    );
  }
}

