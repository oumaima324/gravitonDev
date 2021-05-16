import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
//import {Router, Scene} from 'react-native-router-flux';
//import LoadingScene from './scenes/LoadingScene';
//import AuthScene from './scenes/AuthScene';



//class App extends Component
//{
  //render(){
  //  return(
    //  <Router>
      //<Scene key="root">
      //<Scene key="loading" component={(LoadingScene)} initial={true} hideNavBar={true}></Scene>
    //  <Scene key="auth" component={(AuthScene)} hideNavBar={true} ></Scene>
      //</Scene>
      //</Router>
    //);
//  }
//}

//export default App;
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const App = () =>{ return (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
};
export default App;
