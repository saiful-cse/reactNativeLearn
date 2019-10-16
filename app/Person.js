import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';


export default class Person extends Component {
  render() {
    return (
      <View style={{padding:5, backgroundColor:'green', marginBottom:10}}>
        <Text>Person Name: {this.props.name}</Text>
        <Text>Person email: {this.props.email}</Text>
        <Text>Person phone: {this.props.phone}</Text>
      </View>
    );
  }
}