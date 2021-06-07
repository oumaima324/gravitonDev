import MapView, { Marker } from 'react-native-maps';
import { markers } from '../Data/traceur';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ClusterMap } from 'react-native-cluster-map';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { markers};

  }
  render() {

    var coordinate=(this.props.route.params!==undefined)?[{
         latitude:this.props.route.params.latitude,
          longitude:this.props.route.params.longitude,
          avatar_url:this.props.route.params.avatar_url,
          id:this.props.route.params.id,
        }]:this.state.markers;

         return (
        <View style={styles.container}>
       <ClusterMap
      style={styles.map}
      region={{
        latitude: 34.0242,
        longitude: -6.822734,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
       { coordinate.map((marker) => (
                    <Marker
                    key={marker.id}
                   coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                   image={{uri:marker.avatar_url}}
                   />
                         ))}


    </ClusterMap>

  </View>
);
  }

};
export default Map;
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
