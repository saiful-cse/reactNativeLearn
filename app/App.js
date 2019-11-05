import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import Person from './Person';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name: "Saif Ullah",
      email: "saif@gmail.com"
    }
  }

  change(name, email){
    this.setState({
      name: name,
      email: email
    })

    console.log(this.state);
  }

  
  
  

  render(){
    return(
      <View style={{marginTop: 20}}>
        <Text>Name: {this.state.name}</Text>
        <Text>Email: {this.state.email}</Text>

        <TouchableOpacity onPress={() => this.change('Mukta','mukta@gmail.com')}>
          <Text>Change</Text>
        </TouchableOpacity>
      </View>
    )
  }
}