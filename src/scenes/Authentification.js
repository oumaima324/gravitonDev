import React, {useState} from 'react';
import {Form, Item, Input, Body, CheckBox, Button} from 'native-base';
import { SafeAreaView, StyleSheet, View, Text, Image, Pressable, ScrollView , TouchableOpacity} from 'react-native';
import Checkboxs from '../components/Checkboxs';
import ButtonComponent from '../components/ButtonComponent';
import Historique from '../scenes/Historique';
import { Card} from 'react-native-elements';
const Authentification = ()=>{

  return(
           <View>
            <Image source={require('../images/graviton.png')} style={{alignItems:'center',
            justifyContent:'center', marginTop:50, marginBottom:30 , marginLeft:40}} />
           <Card>
            <Item style={styles.formItems}>
            <Input placeholder="User name"  />
            </Item>
            <Item style={styles.formItems}>
            <Input placeholder="Password"  />
            </Item>
           </Card>
           <View style={{flexDirection:'row', marginLeft:9}}>
             <Checkboxs style={{marginTop:15}}/>
             <Text style={{marginTop:18, fontSize:18}}>Se souvenir</Text>
          </View>
         <View style={{ marginRight:16, marginLeft:12, marginTop: 50, }}>
         <Button onPress={() => this.props.navigation.navigate('TabNavigateur')}>
           <Text style={styles.btnText}>Submit</Text>
          </Button>
          </View>
          </View>

    )

}


const styles = StyleSheet.create({
textContainer:{
  fontSize:20,
},
kiloStyle:{
  fontSize:20,
}
});

export default Authentification;
