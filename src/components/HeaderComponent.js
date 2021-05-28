import React, { Component } from 'react';
import { StyleSheet, View,Text} from 'react-native';

const HeaderComponent= ({label,style})=>
{

  return(
    <View style={[styles.header,style]}>

   <Text style={styles.headerText}>{label}</Text>
   </View>
  )
};


const styles= StyleSheet.create({
  header:{
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontWeight :'bold',
    fontSize :25,
    color: '#333',


  },
});
export default HeaderComponent;
