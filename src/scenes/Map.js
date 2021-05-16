import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 1000,
   width: 1000,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

const Map = () =>{ return (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 34.0242,
         longitude: -6.822734,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
};
export default Map;
