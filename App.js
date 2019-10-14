import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {

    var a=10;
    var b= 100;
    var max =0;

    if(a<b){

      max = b;
      console.log('B is largest');
    }else {
      max = b;
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {
          Platform.os == 'ios' ? (
<             Text>This is IOS</Text>
          ):
          (
            <Text>The is Android</Text>
          )
        }
      </View>
    );
  }
}