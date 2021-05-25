import * as React from 'react';
import { Icon } from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListeTraceurs from '../scenes/ListeTraceurs';
import Historique from '../scenes/Historique';
import ListSection from '../scenes/ListSection';
import Map from '../scenes/Map';
import Plus from '../scenes/Plus';
import Evénements from '../scenes/Evénements';
import 'react-native-gesture-handler';
import
  MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function Apps() {

return (
    <NavigationContainer style={styles.navigationContaier}>
      <Tab.Navigator >
        <Tab.Screen name="Traceurs" component={ListeTraceurs} options={{
          tabBarLabel: 'Traceurs',
          tabBarIcon: ({ color }) => (
            <Icon
   name='map-marker-alt'
   type='font-awesome-5'
   color='#A71F3C' />

           ),
        }} />
        <Tab.Screen name="Historique" component={Historique} options={{
          tabBarLabel: 'Historique',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Icon
   name='monument'
    type='font-awesome-5'
    color='#A71F3C' />

           ),

        }} />
        <Tab.Screen name="Map" component={Map} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Icon
   name='globe-europe'
   type='font-awesome-5'
   color='#A71F3C'  />

           ),
        }}/>
        <Tab.Screen name="evenement" component={Evénements} options={{
          tabBarLabel: 'Evénements',
          tabBarIcon: ({ color }) => (
            <Icon
   name='exclamation-triangle'
   type='font-awesome-5'
   color='#A71F3C' />

           ),
        }} />
        <Tab.Screen name="Plus" component={Plus} options={{
          tabBarLabel: 'Plus',
          tabBarIcon: ({ color}) => (
            <Icon
   name='ellipsis-h'
   type='font-awesome-5'
   color='#A71F3C' />

           ),
        }} />



      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles= StyleSheet.create({
  name:{
   width :'100%',
   height :'10%',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'red'
  },

});
