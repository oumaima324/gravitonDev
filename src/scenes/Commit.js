import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';

class Commit extends Component {
  render () {
    return (
      <View>

      <HeaderComponent >  Evénements </HeaderComponent>

      <View style = {styles.lineStyle} />


      <Searchbar> </Searchbar>

      </View>

    )
  }

  }
  const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 5,
          borderColor:'#808080',
          margin:0,
        },
          });

  export default Commit;
