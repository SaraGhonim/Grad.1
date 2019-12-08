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
import SwipeUpDown from'react-native-swipe-up-down-fix';
import i5 from './assets/i5.png';
import i2 from './assets/i2.png';
import i4 from './assets/i4.png';
import First from './components/swipe1';
import Second from'./components/swipe2';
import Third from'./components/swipe3';

import Fourth from'./components/swipe4';


class App extends  Component{
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
    this.changeState=this.changeState.bind(this);

  }
  changeState= (ispressed1,ispressed2) =>{
    this.setState({ispressed1 });
   this.setState({ ispressed2});
   setTimeout(()=>{alert("The first is: "+ this.state.ispressed2+
   " and the second is: "+this.state.ispressed1);}
  ,3000);
       
 }
  
  render(){
    const { icon1,icon2,icon3,ispressed1,ispressed2} = this.state;

  return (
    <>
      
         <View style={{flex:1,backgroundColor: "#ffd420"}}>
        {/* <View style={{ alignItems: 'center', height: 200, marginBottom: 0,width:330}}>

          <Image source={icon2}
          style={{ width: 200,
            height: 550,
            resizeMode: 'contain'}} /> 
          </View>  */}
    
       <View style={{flex:1}}>
          {         
         (ispressed1==true&&ispressed2==false)?
         <First changeState={this.changeState}/>
        :
        (ispressed2==true&&ispressed1==false)?
        <Second changeState={this.changeState}/>
        :
        <Third changeState={this.changeState}/>
 
 }
         </View>
          
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
     padding: 0, marginBottom: 0,  margin: 0, 
      borderTopLeftRadius: 90, borderTopRightRadius: 90,
      borderBottomEndRadius:50,borderBottomRightRadius:100,},
      input: {
        margin: 15,
        height: 40,
            borderColor: '#7a42f4',
            borderWidth: 2,

}
});

export default App;
