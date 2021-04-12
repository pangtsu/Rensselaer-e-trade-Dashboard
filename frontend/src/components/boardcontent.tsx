import React from "react";
import "./App.css";
import { List, Avatar, Card, Tag } from "antd";
const {Meta} = Card;
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
        grid={{ gutter: 5, column: 3 }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6
        }}
        dataSource={this.props.dataArray}
        footer={
          <div>
            <b>Search Results Found:</b> {this.props.dataArray.length}
          </div>
        }
        renderItem={item => (
          <List.Item>
          <Card 
               hoverable
               style={{ width: 400 }}
               cover={
                 <img
                   alt="example"
                   src={item ? `data:image/png;base64,${item.image}` : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}
                 />
               }
               actions={[
                <Tag color="red">{item ? item.category : "none"}</Tag>,
                <Tag color="gold">{item ? "$"+item.price : "none"}</Tag>
              ]}
             >
               <Meta
                 avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                 title= {item ? item.itemname: "none"}
                 description= {item ? item.descriptions : "none"}
               />
            
            </Card>
        </List.Item>
        )}
      />
    );
  }
}

