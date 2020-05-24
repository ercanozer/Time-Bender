/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import LevelChild from './components/levelchild'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Animated, { Value } from 'react-native-reanimated';


const randomNumber=(min,max)=>{

    min=min+1000;
    max=max+1500;
    let number= Math.floor(Math.random()*(max-min))+min;
  
  return number;

}

class App extends Component  {

  state={
    durum:true,
    nextindex:0,
    level:1,
    sayac:12,
    pointsayi:1000,
    yourscore:0,
    circles:[],
    hesap:0,
    iconname:["closecircleo","checkcircleo"]
    

  }

  levelUp=()=>{


  }

   circleClick=async ()=>{
    let copycircle=[...this.state.circles]
    let hesap=this.state.pointsayi-this.state.sayac;
    
    if(Math.abs(hesap)>600){ 
    
    this.setState({circles:copycircle,sayac:"GAME OVER"})
      
      for (let index = 0; index < copycircle.length; index++) {
        if(copycircle[index].iconname==="minus"){
          copycircle[index].iconname="closecircleo"
           
           
           break;
        }
      }
     
     
     clearInterval(this.Interval)
    }
    else{
   let num= randomNumber(this.state.sayac-this.state.level*50,this.state.sayac-this.state.level*100) 
     this.setState({pointsayi:num,durum:true,hesap:Math.abs(hesap)})
     for (let index = 0; index < copycircle.length; index++) {
      if(copycircle[index].iconname==="minus"){
        copycircle[index].iconname="checkcircleo" 
        Animated.timing()
          this.setState({circles:copycircle,yourscore:this.state.yourscore+Math.abs(hesap)})
          break;
      }
      
    }
 if(copycircle[copycircle.length-1].iconname==="checkcircleo"){
   console.log("calisti");
       
    
    await this.setState({level:this.state.level+1})
        this.setCircle();
   }
        
      }
  
    }

    
  
  setCircle=()=>{ 
    let dizi=[]
    
    for (let index = 0; index <this.state.level+2; index++) {
      dizi[index]={obje:<LevelChild />,iconname:"minus" };
      
    
  }
  this.setState({circles:dizi})

}
  sayac=()=>{
      let sayi=this.state.sayac;
      this.Interval= setInterval(() => {
        if(sayi-this.state.pointsayi>2000){
          clearInterval(this.Interval)
        }
        sayi+=43;
        this.setState({sayac:sayi})
      },50);
    }
    
    componentDidMount(){
      this.setCircle();
      this.sayac();
    }

  render(){

    
     return (
       <LinearGradient style={{flex:1}} colors={["#04071F","#01094C"]}>
        <View style={styles.container1}>
          
          {this.state.circles.map((item,index)=>{

            return <LevelChild iconname={item.iconname} />
          })} 
         
          
       </View>
       <View style={styles.container2}>
         
        <Text style={{position:"absolute",right:20,bottom:150,color:"white",fontWeight:"bold",fontSize:18,
      borderRadius:6,borderWidth:4,textAlign:"center",textAlignVertical:"center",borderColor:"white",padding:6}}>LVL {this.state.level}</Text>
         <Text style={styles.pointText}>{this.state.pointsayi}</Text>
        
         <TouchableOpacity onPress={this.circleClick} style={styles.circlecontainer}>
         
            <View  style={styles.circlecontainer}>
              <Text style={{borderBottomColor:"white",borderBottomWidth:2,marginBottom:25,color:"white",fontSize:22}}>FARK: {this.state.hesap}</Text>
           <Text style={{color:"white",fontSize:22}}>{this.state.sayac}
           </Text>
           
         </View>
         </TouchableOpacity>
        
         <Text style={{color:'rgba(255, 255, 255, 0.45)',fontFamily:"sans-serif-light",fontSize:24,alignSelf:"center"}}>YOUR SCORE</Text>
         <Text style={{color:'rgba(255, 255, 255, 0.65)',fontWeight:"bold",fontSize:20,alignSelf:"center"}}>{this.state.yourscore}</Text>
         <Text style={{color:'rgba(255, 255, 255, 0.45)',letterSpacing:7,fontFamily:"sans-serif-light",fontSize:24,alignSelf:"center",marginTop:20}}>TAP TO PLAY</Text>
         <Text style={{color:'white',
         borderColor:"white",
         textAlign:"center",textAlignVertical:"center",borderRadius:5,borderWidth:2,padding:5,fontFamily:"sans-serif-medium",fontSize:14,alignSelf:"center",marginTop:30}}>
           STOP THE COUNT AT THE RIGHT TIME
         </Text>
       </View>
       </LinearGradient>
    
  );
  }
 
}

const styles = StyleSheet.create({
 container1:{
  
  alignItems:"flex-start",
  flexDirection:"row",
  justifyContent:"center",
  flex:0.25
 },
  container2:{
    flex:0.75,

  },
  pointText:{
    padding:7,
    alignSelf:"baseline",
    borderColor:"white",
    borderWidth:2,
    borderRadius:6,
    fontWeight:"100",
    fontStyle:"italic",
   
    alignSelf:"center",
    fontSize:35,
    color:"#8489AB"
  },
  circlecontainer:{
    marginBottom:20,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginTop:20,
    width:200,
    height:200,
    borderRadius:200/2,
    borderColor:"white",
    borderWidth:0.7
  },
  


});

export default App;
