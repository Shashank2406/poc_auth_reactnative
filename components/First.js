import React from 'react';
import {View,Text,Button,AsyncStorage} from 'react-native';
import Second from './Second'
import Third from './Third'
import {TabNavigator} from 'react-navigation'
import role from "./role"
import Filter from './Filter'
export default class First extends React.Component {
  static navigationOptions = {
    title: 'First'
  };
  constructor(){
      super()
       this.state={
               x:false,
               jsondata:{
            Ammenities:[
              {
                type:'Text',
                title:"Hello World",
              },
              {
                type:'Button',
                title:"Wifi",
              },
             {
                type:'Button',
                title:"Hello World111",
              }
            ],
            Ammenities2:[
              {
                type:'Text',
                title:"Hello World - 2 ",
              },
              {
                type:'Button',
                title:"Car Parking",
              },
             {
                type:'Button',
                title:"Bluetooth",
              }
            ],
        }}
       AsyncStorage.getItem('role').then((value)=> {
           this.setState({x:value})
        })  
  }
  tabs(){
    if(this.state.x=='admin')
        {
        data = {
            Hello: {
                screen: Third,
                key: "admin"
            },
            Home: {
                screen: Second,
                key: "userDoctor"
            },
        }
    }
    else{
        data = {
            Hello: {
                screen: Third,
                key: "user"
            },
            tab2: {
                screen: Second,
                key: "user"
            },
            tab3: {
                screen: Third,
                key: "user"
            },
            tab4: {
                screen: Third,
                key: "user"
            }
        }
    }
    return data
  }
  filter(data){
    console.log(data)
  }
  render() {
       const { params } = this.props.navigation.state;
       
       const Tabs = TabNavigator(this.tabs(),{
           tabBarPosition: 'bottom'
       })
     return (
        <View>
        {/* <Button title="Filter" onPress={()=>this.filter()}></Button> */}
        <Filter data={this.state.jsondata} callback={this.filter.bind(this)}/>
        <Tabs />
        </View>
     )
  }
}

