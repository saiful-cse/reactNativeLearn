import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Person from './Person';


export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render(){
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '*').join(' ')}
        </Text>
      </View>
    );
  }
}