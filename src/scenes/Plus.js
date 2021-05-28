import { ListItem, Avatar, Icon } from 'react-native-elements';
import React, { Component } from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';





const list = [
  {
    name: 'Paramètres',
    avatar_url: 'https://img.icons8.com/windows/2x/settings--v1.png',
    Screen:'Parametres',
  },
  {
    name: 'Rapport Quotidiens',
      avatar_url: 'https://img.icons8.com/dotty/2x/report-file.png',
      Screen:'RapportQuotidiens',

  },
  {
    name: 'Documents',
    avatar_url: 'https://img.icons8.com/carbon-copy/2x/new-document.png',
    Screen:'Service',


  },
  {
    name: 'Version PC',
  avatar_url: 'https://img.icons8.com/carbon-copy/2x/laptop.png',
  },
  {
    name: 'Deconnexion',
  avatar_url: 'https://img.icons8.com/android/2x/logout-rounded.png',
  },

]

class Plus extends Component {




  render () {
    return (
      <View>
      <HeaderComponent label='Plus' style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
      <View style = {styles.lineStyle} />

      <FlatList
        keyExtractor = {(item, index) => index.toString()}
        data={list}
        renderItem = {({ item }) => (
          <ListItem bottomDivider>
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => this.props.navigation.navigate(item.Screen)} />
          </ListItem>
        )}
      />
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
export default Plus;
