import * as React from 'react';
import { Icon } from 'react-native-elements';
import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListeTraceurs from '../scenes/ListeTraceurs';
import Historique from '../scenes/Historique';
import ListSection from '../scenes/ListSection';
import LoadingScene from '../scenes/LoadingScene';
import AuthScene from '../scenes/AuthScene';
import Map from '../scenes/Map';
import Plus from '../scenes/Plus';
import Parametres from '../scenes/Parametres';
import Evénements from '../scenes/Evénements';
import Service from '../scenes/Service';
import Autres from '../scenes/Autres';
import Vidange from '../scenes/Vidange';
import Assurance from '../scenes/Assurance';

import VisiteTechnique from '../scenes/VisiteTechnique';

import RapportQuotidiens from '../scenes/RapportQuotidiens';
import 'react-native-gesture-handler';
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
function TabNavigateur(){
  return (

        <Tab.Navigator >
          <Tab.Screen name="Traceurs" component={TraceurStack} options={{ tabBarLabel: 'Traceurs',tabBarIcon: ({ color }) => (
              <Icon name='map-marker-alt' type='font-awesome-5'color='#A71F3C' />   ),}} />
          <Tab.Screen name="Historique" component={Historique} options={{ tabBarLabel: 'Historique', tabBarColor: 'red',  tabBarIcon: ({ color }) => (
              <Icon name='monument'  type='font-awesome-5'  color='#A71F3C' />),}} />
          <Tab.Screen name="Map" component={Map} options={{tabBarLabel: 'Map',tabBarIcon: ({ color }) => (
              <Icon name='globe-europe' type='font-awesome-5' color='#A71F3C'  /> ),  }}/>
          <Tab.Screen name="evenement" component={Evénements} options={{  tabBarLabel: 'Evénements',tabBarIcon: ({ color }) => (
              <Icon name='exclamation-triangle' type='font-awesome-5' color='#A71F3C' />   ),  }} />
          <Tab.Screen name="Plus" component={Plus} options={{ tabBarLabel: 'Plus',  tabBarIcon: ({ color}) => (
              <Icon   name='ellipsis-h'   type='font-awesome-5'   color='#A71F3C' /> ),  }} />
        </Tab.Navigator>

    );
}
const StackTrace = createStackNavigator();
function TraceurStack(){
  return (
    <StackTrace.Navigator initialRouteName="ListeTraceurs">
       <StackTrace.Screen name="ListeTraceurs" component={ListeTraceurs} options={{headerShown: false}}  />
      <StackTrace.Screen name="ListSection" component={ListSection} options={{headerShown: false}} />
      <StackTrace.Screen name="Map" component={Map} options={{headerShown: false}}  />
      <StackTrace.Screen name="Parametres" component={Parametres} options={{headerShown: false}} />
      <StackTrace.Screen name="Service" component={Service} options={{headerShown: false}}  />
      <StackTrace.Screen name="RapportQuotidiens" component={RapportQuotidiens} options={{headerShown: false}}  />
      <StackTrace.Screen name="Autres" component={Autres} options={{headerShown: false}}  />
      <StackTrace.Screen name="Vidange" component={Vidange} options={{headerShown: false}}  />
      <StackTrace.Screen name="VisiteTechnique" component={VisiteTechnique} options={{headerShown: false}}  />
      <StackTrace.Screen name="Assurance" component={Assurance} options={{headerShown: false}}  />
    </StackTrace.Navigator>
  );
}


const Stack = createStackNavigator();
export default function Apps() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
         <Stack.Screen name="Splash" component={LoadingScene} options={{headerShown: false}}  />
        <Stack.Screen name="AuthScene" component={AuthScene} options={{headerShown: false}} />
        <Stack.Screen name="TabNavigateur" component={TabNavigateur} options={{headerShown: false}}  />
      </Stack.Navigator>
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
