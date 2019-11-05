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
      // Try setting `flexDirection` to `column`.
      // <View style={{flex: 1, flexDirection: 'row'}}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      // <View style={{
      //   flex: 1,
      //   flexDirection: 'row',
      //   justifyContent: 'space-evenly',
      // }}>
      //   <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>

      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
      }}>
        <View style={{height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>



    )
  }
}