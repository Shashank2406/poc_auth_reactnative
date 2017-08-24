import React from 'react';
import {View,Text,Button} from 'react-native';


export default class Second extends React.Component {
  static navigationOptions = {
    title: 'Second',
  };
  render() {
    return (
      <View>
        <Text>Second Page</Text>
      </View>
    );
  }
}

