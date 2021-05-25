import React, { Component } from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { FloatingAction } from "react-native-floating-action";

const actions = [
{
  text: "Accessibility",
  icon: require("../images/Logoo.png"),
  name: "Logoo",
  position: 2
},
{
  text: "Language",
  icon: require("../images/voiture.png"),
  name: "voiture",
  position: 1
},
{
  text: "Location",
  icon: require("../images/voiture2.png"),
  name: "voiture2",
  position: 3
},
{
  text: "Video",
  icon: require("../images/img.png"),
  name: "img",
  position: 4
}
];

class Service extends Component {

  render() {
    return (
      <View style={styles.container}>
  <Text style={styles.example}>Floating Action example</Text>
  <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
    ref={(ref) => { this.floatingAction = ref; }}

  />

</View>
    );
  }

}
export default Service;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
