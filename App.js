import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
render(){
  return(
    <Button color="red" title="red button"></Button>
  )
}
}


export default class App extends Component {
  render() {
return (
        <View style={{marginTop:500}}>
        <RedButton/>
       <Text style={{marginTop:50,marginLeft:150}}>Dhriti</Text>
        <Button color="#000000" title="click me"></Button>
        </View>
    );
  }
}