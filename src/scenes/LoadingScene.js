import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated,Image} from 'react-native';
import img from '../assets/images/img.png';



class LoadingScene extends Component{

  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    };
  componentDidMount(){
    const { LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
      toValue: 1,
      tension: 10,
      friction: 2,
      duration: 1000,
      useNativeDriver: false,

    }).start(),

    Animated.timing(LogoText,{
      toValue: 1,
      duration: 1200,
      useNativeDriver: false,

    }),
  ]).start(()=>{
        setTimeout(()=>{  this.props.navigation.navigate('AuthScene')}, 1500);

  });
  }
  render(){
    return(
      <View style={styles.container}>
      <Animated.View style={{
        opacity:this.state.LogoAnime,
        top: this.state.LogoAnime.interpolate({
          inputRange:[0,1],
          outputRange:[80,0],
        }),
      }}>
      <Image source={require('../images/graviton.png')} />
      </Animated.View>

      <Animated.View style={{
        opacity:this.state.LogoText}}>

      </Animated.View>

      </View>

    );
  }
}

export default LoadingScene;
const styles = StyleSheet.create({
  container:{
  
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  logoText:{
    color:'#FFFFFF',
    fontFamily: 'GoogleSans-Bold',
    fontSize:30,
    marginTop:29.1,
    fontWeight:'700',
  },
    image:{
      width: '50%',
      height: '50%',
    },
})
