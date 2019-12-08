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
    this._signInAsync=this._signInAsync.bind(this);
    this._reg=this._reg.bind(this);


    this.state = {
      icon1: i5,
      icon2: i2,
      icon3: i4,
      ispressed1:false,
      ispressed2:false,


      animation: "easeInEaseOut",

    }
  }
  _signInAsync=()=>{
    //   this.setstate({ispressed1:true});
    this.setState({ispressed1:!this.state.ispressed1});
    console.log('ooooooo')
    console.log(this.state.ispressed1)
    this.props.changeState(this.state.ispressed1,this.state.ispressed2);

     }
     _reg(){
        //   this.setstate({ispressed1:true});
        this.setState({ispressed2:!this.state.ispressed2});
        console.log('12222hhh')
        console.log(this.state.ispressed2)
        this.props.changeState(this.state.ispressed1,this.state.ispressed2);
    
         }

  render(){
    const { icon1,icon2,icon3,ispressed1,ispressed2} = this.state;

  return (
    <>
      
        <View style={{flex:1,backgroundColor: "#ffd420"}}> 
         <View style={{ alignItems: 'center', height: 200, marginBottom: 100,width:330}}>

          <Image source={icon2}
          style={{ width: 200,
            height: 550,
            resizeMode: 'contain'}} />  

           </View>
          <SwipeUpDown
            style={{backgroundColor:'#ffffff',flex:1}}
            itemMini={
              <View style={{ alignItems: 'center' }}>

          <View style = {styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
                
                  <Text style={styles.input}> Create account</Text>
                 
                </TouchableOpacity>

              </View>
              <View style = {styles.buttonContainer}>
              <TouchableOpacity style={styles.button2} onPress={this._signInAsync}>
                
                <Text style={styles.input2}> Sign in</Text>
               
              </TouchableOpacity>

                </View>

           
                </View>
            }
                          
           
            itemFull={<>
            <Text>hey</Text>
            </>}
            swipeHeight={160} 
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
     padding: 10, marginBottom: 0,  margin: 0, },
  input: {
        height: 40,
        borderColor: '#7a42f4',
        textAlign: 'center',
        color: 'white',
        paddingTop:5
      },input2: {
        height: 40,
        borderColor: '#7a42f4',
        textAlign: 'center',
        color: 'black',
        paddingTop:5

      },
button:{
  backgroundColor:'#ff8900',
  borderTopLeftRadius: 10, borderTopRightRadius: 10,
  borderBottomLeftRadius:10,borderBottomRightRadius:10,
  height: 35,
width:250},
button2:{
  backgroundColor:'#f1f2f6',
  borderTopLeftRadius: 10, borderTopRightRadius: 10,
  borderBottomLeftRadius:10,borderBottomRightRadius:10,
  height: 35,
width:250},


});

export default Swipe2;
