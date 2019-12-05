/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeUpDown from'react-native-swipe-up-down';

class App extends  Component{
  render(){
  return (
    <>
      
        <View style={{flex:1,backgroundColor: "#430D0B"}}>
          <Text>Welcome Sara</Text>
          <SwipeUpDown
            style={{backgroundColor:'black'}}

          />

          </View>
    </>
  )}
};

const styles = StyleSheet.create({
  
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
