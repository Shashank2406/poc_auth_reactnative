/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AsyncStorage,
  Linking,
  Platform
} from 'react-native';
 
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';
import { FormLabel, FormInput,FormValidationMessage } from 'react-native-elements'

export default class Elements extends Component {
  constructor(){
    super()
    this.state = {
      formData:{},
      role:false,
      nav:{},
      flag:null
    }
  }
  data() {
    fetch('http://192.168.14.129:2001/api/user/verify', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.formData.username,
        password: this.state.formData.password,
      })
    }).then((response) => response.json())
      .then((responseData) => {
        // console.warn(responseData.respData.data)
        this.setState({role:responseData.respData.data})
        AsyncStorage.setItem('role',this.state.role)
        const { navigate } = this.props.navigation;
        navigate('Tab')
      })
    
  }
  handleFormChange(){
    // this.setState({formData:formData})
    console.log("Change")
    // this.props.onFormChange && this.props.onFormChange(formData);
   
  }  
  render() {
    return (  
      <View style={styles.container}>
            <FormLabel>Name</FormLabel>
            <FormInput onChangeText={() => this.handleFormChange()} />
            <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
    container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  in: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: '#666666',
    height: 40, 
    borderColor: 'white', 
    borderWidth: 0, 
    backgroundColor: 'white'
    // borderBottomColor: '#000000'
  }
});



