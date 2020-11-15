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
            <b>search results found:</b> {1}
          </div>
        }
        renderItem={item => (
          <List.Item
            key={"AC"}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  }
                />
              }
              title={<a href={"https://ant.design"}>{"AC"}</a>}
              description={"Ac"}
            />
            {"utility"}
            {item ? "A" : "B"}
          </List.Item>
        )}
      />
    );
  }
}
