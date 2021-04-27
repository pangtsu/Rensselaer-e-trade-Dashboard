import React from "react";
import "./App.css";
import { List, Avatar, Card, Tag, Spin } from "antd";
import { getImage } from "./../utils/getImage";
import { filterCategory, filterDate, filterPrice } from "./../utils/filter";
const {Meta} = Card;
export interface Props {
  dataArray: any;
  curFilterKey: any;
  isArrayLoading: boolean;
}

export interface State {
  currData: any;
  filteredData: any;
  loading: boolean;
}

export default class boardcontent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currData: [],
      filteredData: [],
      loading: false
    };
  }


  private fetchImage(itemArray: any) {
    itemArray.forEach(element => {
      if (element.imageids && element.imageids.length > 0){
        this.setState({
          loading: true
        }, () =>{
          getImage(element.imageids[0].toString())
          .then(res => {
            element.image = res.data;
            this.setState({
              loading: false
            }, () => {
              console.log(this.state.loading);
            });
          })
          .catch(error => {
            console.log(error);
          });  
        });   
        }
    });
  }

  componentDidMount(){
    this.setState({
      currData: this.props.dataArray,
      filteredData: this.props.dataArray,
    });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.dataArray !== prevProps.dataArray) {
        var tmp = JSON.parse(JSON.stringify(this.props.dataArray));
        this.fetchImage(tmp);
        this.setState({currData: tmp, filteredData: tmp});
    }
    if (this.props.isArrayLoading !== prevProps.isArrayLoading) {
      this.setState({loading:this.props.isArrayLoading});
  }
    if (this.props.curFilterKey !== prevProps.curFilterKey) {
      if (this.props.curFilterKey.length == 1){ // non-nested menu
        if (this.props.curFilterKey[0] == "all"){
          this.setState({filteredData: this.state.currData});
        }
      }

      else{ // nested menu
        if (this.props.curFilterKey[1] == "category"){
          console.log(this.props.curFilterKey);
          const filteredData = filterCategory(this.state.currData, this.props.curFilterKey[0]);
          this.setState({filteredData: filteredData});
        }
        else if (this.props.curFilterKey[1] == "date"){
          console.log(this.props.curFilterKey);
          const filteredData = filterDate(this.state.currData, this.props.curFilterKey[0]);
          this.setState({filteredData: filteredData});
        }
        else if (this.props.curFilterKey[1] == "price"){
          console.log(this.props.curFilterKey);
          const filteredData = filterPrice(this.state.currData, this.props.curFilterKey[0]);
          this.setState({filteredData: filteredData});
        }
      }

    }
  }

  render() {
    if (this.state.loading) return(
      <div className="example">
      <Spin size="large" />
      </div> 
    );

    return (
      <List
        grid={{ gutter: 5, column: 3 }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 6
        }}
        dataSource={this.state.filteredData}
        footer={
          <div>
            <b>Search Results Found:</b> {this.state.filteredData.length}
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
                <Tag color="volcano">{item ? item.created_at.slice(0,10) : "none"}</Tag>,
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

