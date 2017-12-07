import React, { Component } from 'react';
import { StyleSheet, Text, View,  NativeModules, Button, } from 'react-native';
import BackgroundTask from './BackgroundTask' ;

const ServiceCaller = NativeModules.ServiceCaller;

export default class App extends Component {

 serviceMethod =  async () => {
    ServiceCaller.startService();
  BackgroundTask()
  .then(
    (res)=>{ 
      console.log(res)
    }
  ).catch(
    (res)=>{ 
      console.log(res)
  }) ;
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Background Service Example 
        </Text>
        <Button
        style = {styles.instructions}
        title = {"press to start service"}
        onPress = {this.serviceMethod} />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },

  instructions:{
    backgroundColor:'blue',
    color:'white',
    fontSize:20,
    margin:10
  },
});