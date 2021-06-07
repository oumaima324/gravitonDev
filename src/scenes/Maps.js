import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import MapViewDirections from 'react-native-maps-directions';
import {Text, View, StyleSheet} from 'react-native';

const origin = {latitude :  34.02439187431001,longitude :  -6.826895202898985};

const destination = {latitude :  34.01621895880241,longitude : -6.829866743740063};

const GOOGLE_MAPS_APIKEY = 'AIzaSyAEDZFhs4Iig2OPsMovUj4rn6gu6ZHju4s';

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

const MapScreen = () =>{ return (
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
        <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="#B22222"
      waypoints={[{
                latitude: 34.020357527607594,
                longitude: -6.825304091623082,
              }, {
                        latitude: 34.01748909271077,
                        longitude: -6.8239611222549375,
                      }]}

  />
   <Marker
      coordinate={origin}



    ></Marker>

    <Marker
      coordinate={destination}
    ></Marker>
     </MapView>
   </View>
);
};
export default MapScreen;
