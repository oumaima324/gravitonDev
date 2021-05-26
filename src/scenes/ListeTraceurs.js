import { ListItem, Avatar, Icon } from 'react-native-elements';
import React, { Component } from 'react';
import { View, FlatList,StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';




const list = [
  {
    name: 'Clio',
    avatar_url: 'https://cdn.icon-icons.com/icons2/577/PNG/128/ExecutiveCar_Black_icon-icons.com_54904.png',
    vitesse:'(5 Kms)',
     Heure: 'il ya environ 2 heurs',
  },
  {
    name: 'Dacia Docker',
    avatar_url: 'https://cdn.icon-icons.com/icons2/577/PNG/128/Cabriolet_Red_icon-icons.com_54906.png',
    vitesse:'(10 Kms)',
     Heure: 'il ya environ 2 heurs',
  },
  {
    name: 'JUMPY',
    avatar_url: 'https://cdn.icon-icons.com/icons2/577/PNG/128/Cabriolet_Red_icon-icons.com_54906.png',
    vitesse:'(10 Kms)',
     Heure: 'il ya environ 2 heurs',
  },

]

class ListeTraceurs extends Component {




  render () {
    return (
      <View>
    <HeaderComponent label='Traceurs' style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
      <View style = {styles.lineStyle} />
      <Searchbar></Searchbar>
      <FlatList
        keyExtractor = {(item, index) => index.toString()}
        data={list}
        renderItem = {({ item }) => (
          <ListItem bottomDivider onPress={() =>
      this.props.navigation.navigate('Map')
    }>
            <Avatar source={{uri: item.avatar_url}} />
            <ListItem.Content>
              <ListItem.Title>{`${item.name} ${item.vitesse}`}</ListItem.Title>
              <ListItem.Subtitle>{item.Heure}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron onPress={() => this.props.navigation.navigate('ListSection')}/>

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

export default ListeTraceurs;
