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


class Swipe1 extends  Component{
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
        <View style={{ alignItems: 'center', height: 150, marginBottom: 10,width:330}}>

          <Image source={icon2}
          style={{ width: 190,
            height: 350,
            resizeMode: 'contain'}} /> 

          </View>
          
          <SwipeUpDown
            style={{backgroundColor:'#ffffff',flex:1}}
            itemMini={
              <View style={{ alignItems: 'center' }}>

                <View style = {styles.buttonContainer}>
                

                <TextInput style={ styles.input} keyboardType="email-address"
                 autoCorrect={false} maxLength={30} multiline={false}
                  placeholder="Email"
                  underlineColorAndroid = "#ffd420"
                  />
                </View>

                <TextInput style = {styles.input}
               underlineColorAndroid = '#ffd420'
              //  placeholderTextColor = "#9a73ef"
                placeholder="PassWord"
                name ='Password'/>

                <View style = {styles.buttonContainer2}>
                <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
                
                  <Text style={styles.input2}> Create account</Text>
                 
                </TouchableOpacity>

              </View>


              <Text style={styles.input2}> Need Support?</Text>

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
      borderTopLeftRadius: 90, borderTopRightRadius: 90,
      borderBottomEndRadius:50,borderBottomRightRadius:100,},
 input: {
        margin: 15,
        height: 40,
        width:260,
        borderColor: '#ffffff',

},
buttonContainer2:{
  backgroundColor:'#242a37',
  borderTopLeftRadius: 10, borderTopRightRadius: 10,
  borderBottomLeftRadius:10,borderBottomRightRadius:10,
  height: 35,
width:250,
margin:15},
input2:{ height: 40,
         borderColor: '#7a42f4',
         textAlign: 'center',
         color: 'white',
         paddingTop:5}
});

export default Swipe1;
