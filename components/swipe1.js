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
            height: 150,
            resizeMode: 'contain'}} /> 

          </View>
          
          <SwipeUpDown
            style={{backgroundColor:'#ffffff',flex:1}}
            itemMini={
              <View style={{ alignItems: 'center' }}>

                <View style = {styles.buttonContainer}>
                

               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               placeholder="UserName"
               name ='UserName'/>
                </View>

                <View style = {styles.buttonContainer}>
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
                placeholder="PassWord"
                name ='Password'/>
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
      borderTopLeftRadius: 90, borderTopRightRadius: 90,
      borderBottomEndRadius:50,borderBottomRightRadius:100,},
      input: {
        margin: 15,
        height: 40,
            borderColor: '#7a42f4',
            borderWidth: 2,

}
});

export default Swipe1;
