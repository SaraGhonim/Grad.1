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
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeUpDown from'react-native-swipe-up-down';
import i5 from '../assets/i5.png';
import i2 from '../assets/i2.png';
import i4 from '../assets/i4.png';


class Swipe2 extends  Component{
  constructor(props) {
    super(props);

    this.state = {
      icon1: i5,
      icon2: i2,
      icon3: i4,
      ispressed1:false,
      ispressed2:false,


      animation: "easeInEaseOut",

    }
  }
  

  render(){
    const { icon1,icon2,icon3,ispressed1,ispressed2} = this.state;

  return (
    <>
      
        <View style={{flex:1,backgroundColor: "#ffd420"}}>
        <View style={{ alignItems: 'center', height: 50, marginBottom: 0,width:330}}>

          <Image source={icon2}
          style={{ width: 180,
            height: 350,
            resizeMode: 'contain'}} /> 

          </View>
          
          <SwipeUpDown
            style={{backgroundColor:'#ffffff',flex:1}}
            itemMini={
              <View style={{ alignItems: 'center' }}>

             <View style = {styles.buttonContainer1}>
                

                <TextInput style={ styles.input} keyboardType="email-address"
                 autoCorrect={false} maxLength={30} multiline={false}
                  placeholder="Moblie Number"
                  underlineColorAndroid = "#ffd420"
                  />
                </View>
                <View style = {styles.buttonContainer1}>

                <TextInput style = {styles.input}
               underlineColorAndroid = '#ffd420'
              //  placeholderTextColor = "#9a73ef"
                placeholder="PassWord"
                name ='Password'/>

                </View>

                <View style = {styles.buttonContainer2}>
              <TouchableOpacity style={styles.button2} onPress={this._signInAsync}>
                
                <Text style={styles.input2}> Sign in</Text>
               
              </TouchableOpacity>

                </View>
               
                </View>
            }
                          
           
            itemFull={ <View style={styles.panelContainer}>
            <Text style={styles.instructions}>
              Swipe down to close
            </Text>
          </View>}
            swipeHeight={300} 
            onShowMini={() => console.log('mini')}
            animation={this.state.animation}
            onShowFull={() => console.log('full')}

          />
          
                 
                
         
          </View>

          
    </>
  )}

  
};

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  panelContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  buttonContainer:{ 
    flex:1
  },
input: {
      margin: 15,
      height: 40,
      width:260,
      borderColor: '#ffffff',},

  buttonContainer1:{
    borderTopLeftRadius: 10, borderTopRightRadius: 10,
    borderBottomLeftRadius:10,borderBottomRightRadius:10,
    height: 35,
  width:250, margin:15},
  buttonContainer2:{
    backgroundColor:'#f1f2f6',

    borderTopLeftRadius: 10, borderTopRightRadius: 10,
    borderBottomLeftRadius:10,borderBottomRightRadius:10,
    height: 35,
  width:250,
  margin:15,
},
 input1: {
        margin: 15,
        height: 40,
        width:300,
        borderColor: '#ffffff',
        borderWidth: 0,

},
group: {
  marginTop: 10
},
 
input: {
  padding: 5,
  flex: 1,
  height: 5,
  borderWidth: 0,
  borderColor: '#7a4204',

},
title: {
  fontSize: 20
},
input2:{textAlign:'center',  paddingTop:5
}
});

export default Swipe2;
