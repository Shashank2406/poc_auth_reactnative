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
import {TabNavigator} from 'react-navigation'
import {StackNavigator} from 'react-navigation'
import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

class authreact extends Component {
  constructor(){
    super()
    this.state = {
      formData:{},
      role:false,
      nav:{},
      flag:null
    }
  }
  componentDidMount() { 
    
  if (Platform.OS === 'android') {
    Linking.getInitialURL().then(url => {
      this.navigate(url);
    });
  } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }
  
  componentWillUnmount() { 
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL = (event) => { 
    this.navigate(event.url);
  }
  navigate = (url) => { 
    const { navigate } = this.props.navigation;
    // const route = url.replace(/.*?:\/\//g, '');
    // const id = route.match(/\/([^\/]+)\/?$/)[1];
    // const routeName = route.split('/')[0];
  
    // if (routeName === 'people') {
    //   navigate('People', { id, name: 'chris' })
    // };
    navigate('Tab')
  }
    data() {
    console.log(this.state.formData)
 

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
  handleFormChange(formData){
    this.setState({formData:formData})
    console.log(formData)
    this.props.onFormChange && this.props.onFormChange(formData);
   
  }  
  render() {
    return (
      <View style={styles.container}>
         <Form
        ref='registrationForm'
        onChange={(this.handleFormChange.bind(this))}
        label="Personal Information">
         <InputField style={styles.in} ref='username'  placeholder='username'/>  
         {/* <TextInput style={styles.in} onChangeText={(text) => this.setState({text})} value={this.state.text} placeholder="username"/> */}
         <InputField style={styles.in} ref='password'  placeholder='password'/>   
         <Button title="Login"styleName="clear" onPress={() => this.data()} >
        </Button>
        </Form>
      </View>
    );
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Second',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
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

const MyApp = StackNavigator({
  Home: {
    screen: authreact,
  },
  Tab:{
    screen: First
  }
});





AppRegistry.registerComponent('authreact', () => MyApp);
