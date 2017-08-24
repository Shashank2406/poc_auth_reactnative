import React from 'react';
import {View,Text,Button} from 'react-native';


export default class Third extends React.Component {
  static navigationOptions = {
    title: 'Third',
  };
  render() {
    return (
      <View>
        <Text>Third Page</Text>
      </View>
    );
  }
}

