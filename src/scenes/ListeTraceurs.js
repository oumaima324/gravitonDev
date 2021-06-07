import { ListItem, Avatar, Icon } from 'react-native-elements';
import React, { Component } from 'react';
import { View, FlatList,StyleSheet} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Searchbar from '../components/Searchbar';
import {markers} from '../Data/traceur';






class ListeTraceurs extends Component {
  constructor(props) {
      super(props);
      this.state={markers:[]};
    }
  render () {
    return (
      <View>
    <HeaderComponent label='Traceurs' style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
      <View style = {styles.lineStyle} />
      <Searchbar></Searchbar>
      <FlatList
          keyExtractor={item => item.id}
        data={markers}
        renderItem = {({ item }) => (
          <ListItem bottomDivider onPress={() =>
      this.props.navigation.navigate('Map', {
        latitude :  item.latitude,
         longitude :  item.longitude,
         avatar_url: item.avatar_url,
         vitesse: item.vitesse,
         id:item.id,

              })
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
