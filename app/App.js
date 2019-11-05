import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Person from './Person';


const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },

  red: {
    color: 'red'
  },

  body:{
    height: 300,
    width: 300,
    backgroundColor: 'green'
  }

});


export default class App extends Component{
  render(){
    return(
      // <View>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      // </View>

      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?

      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
        <View style={{flex: 1, backgroundColor: 'chocolate'}} />
      </View>

    )
  }
}