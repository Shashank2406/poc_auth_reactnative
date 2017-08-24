import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
// export function EditData(data) {
//   console.log(data[0])
//   var collection=[];
//   data.map((data,key)=>{
//     switch(data.type)
//     {
//        case 'Button':
//        collection.push(<Button title={data.title} />)
//        case 'Text':
//         collection.push(<Text >{data.title}</Text>)
//     }

//   })
//    return collection;

// }

export default class Filter extends React.Component {
  constructor(){
      super()
      this.state={
          tags:null,
          reply:[]
      }
  } 
  componentWillMount(){
      this.EditData(this.props.data)
  }  
  EditData(data) {
    var tags = [];
    // data.map((data, key) => {
    //   // console.log(data.type,key)
    //   switch (data.type) {
    //     case 'Button':
    //       tags.push(<Button title={data.title} onPress={() => this.onchange(data.title,key)} />)
    //       break;
    //     case 'Text':
    //       console.log(data.type,key)
    //       tags.push(<Text >{data.title}</Text>)  
    //       break;
    //     default:  null
    //   }

    // })
    let x;
    let y;
    for(x in data){
      tags.push(<Text>{x}</Text>)
      data[x].map((Inner_data,key)=>{
        console.log(key)
        switch (Inner_data.type) {
          case 'Button':
            tags.push(<Button title={Inner_data.title} onPress={() => this.onchange(Inner_data.title)} />)
            break;
          case 'Text':
            console.log(Inner_data.type, key)
            tags.push(<Text >{Inner_data.title}</Text>)
            break;
          default: null
        }

      })
      // for(y in data[x])
      //   {
      //   console.log(x,y)  
      //   switch (data[x][y].type) {
      //     case 'Button':
      //       tags.push(<Button title={y} onPress={() => this.onchange(x)} />)
      //       break;
      //     case 'Text':
      //       tags.push(<Text >{data[x][y].title}</Text>)
      //       break;
      //     default: null
      //   }
      //   }
    }
    tags.push(<Button title="Apply Now" onPress={() => this.apply()} />)
    tags.push(<Button title="Cancel" onPress={() => this.cancel()} />)
    this.setState({ tags })
  }
  onchange(value){
    console.log(value)
    this.state.reply.push(value)
    // for(i=0;i<=this.state.reply.length;i++)
    //   {
    //     if(this.state.reply[i]==value)
    //       {
    //         console.log("true") 
    //       }
    //     else{

    //         this.state.reply.push(value)
    //     }  
    //   }
    // this.state.reply.map((lvalue,key)=>{
    //   console.log(key,lvalue)
    //   if(lvalue==value){
    //     console.log("true")
    //     // this.state.reply.splice(value)
    //   }
    //   else{
    //     console.log("false")
    //     // this.state.reply.push(value)
    //   }
    // })
    console.log(this.state.reply) 
  }
  apply() {
    console.warn("Apply")
    this.props.callback(this.state.reply)
  }
  cancel() {
    console.warn("cancel")
    this.props.callback(this.state.reply)
  }
  
  render() {
    return (
      <View>
        <Text>Second Page</Text>
        {this.state.tags}
      </View>
    );
  }
}


