import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import Person from './Person';


export default class App extends Component {
  render() {

    return (
      <View style={{ marginTop:20 }}>
        <Text>Person list goes here:</Text>
        <Person name="saif" phone="01400" email="saif@gmail.com"/>
      </View>
    );
  }
}