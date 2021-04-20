import React from "react";
import "./App.css";
import { List, Avatar, Card, Tag } from "antd";
import { getImage } from "./../utils/getImage";
const {Meta} = Card;
export interface Props {
  dataArray: any;
}

export interface State {
  currData: any;
}

export default class boardcontent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currData: []
    };
  }


  private fetchImage(itemArray: any) {
    itemArray.forEach(element => {
      if (element.imageids && element.imageids.length > 0){
        getImage(element.imageids[0].toString())
          .then(res => {
            element.image = res.data;
          })
          .catch(error => {
            console.log(error);
          });      
        }
    });
  }

  componentDidMount(){
    this.setState({
      currData: this.props.dataArray
    });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataArray !== prevProps.dataArray) {
        var tmp = JSON.parse(JSON.stringify(this.props.dataArray));
        this.fetchImage(tmp);
        this.setState({currData: tmp}, () => {
          console.log(this.state.currData);
        });
    }
  }

  render() {
    console.log(this.props.dataArray);
    return (
      <List
        grid={{ gutter: 5, column: 3 }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6
        }}
        dataSource={this.state.currData}
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
                   src={item ? `data:image/png;base64, ${item.image}` : "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"}
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

