
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    
  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

  class LevelChild extends Component{
      render(){
          return[
          <View  style={{ 
          
             width:40,
            marginLeft:10,
            justifyContent:"center",
            alignItems:"center",
            marginTop:40,
            height:40,
            borderRadius:40/2,
            backgroundColor:"gray"}}>
            
            <Icon name={this.props.iconname} style={{display:"flex"}} size={40} color="white" />
          
            
     

          </View>]
      }
  }

  const styles=StyleSheet.create({
      container:{
          width:40,
          marginLeft:10,
          marginTop:40,
          height:40,
          borderRadius:40/2,
         

      }
  })

  export default LevelChild;