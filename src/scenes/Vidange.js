import React, {useState} from 'react';
import {Form, Item, Input, Body, CheckBox} from 'native-base';
import { SafeAreaView, StyleSheet, View, Text, Button, Image, Pressable, ScrollView } from 'react-native';
import { Card} from 'react-native-elements';
import HeaderComponent from '../components/HeaderComponent';
import ModalDropdown from 'react-native-modal-dropdown';
import Checkboxs from '../components/Checkboxs';
import ButtonComponent from '../components/ButtonComponent';


const Vidange = ()=>{
  const [shouldShow, setshouldShow]=useState(true);
  const [shouldShoww, setshouldShoww]=useState(true);
  const [shouldShowww, setshouldShowww]=useState(true);

  return(

    <SafeAreaView  style={{height: 670}}>
    <HeaderComponent label='service' style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>
    <ScrollView  >
       <Item style={{paddingBottom: 15,paddingTop: 15}}>
        <Text style={styles.textContainer}>Traceur</Text>
        <ModalDropdown options={['CLIO4 rouge', 'Dacia Dokker', 'JUMPY 15933 B 7']} style={{marginLeft: 130}}/>
        </Item>
        <Item style={styles.formItems}>
          <Text style={styles.textContainer}>Name</Text>
          <Input placeholder="Vidange" style={{marginLeft: 127}} />
        </Item>
        <View style={{flexDirection:'row'}}>
        <Pressable style={{flex:1, backgroundColor:'#CD6155', alignItems: "center", paddingBottom: 15,paddingTop: 15}} onPress={()=>setshouldShow(!shouldShow)}>
        <Text style={{color:'white', fontSize:15, fontWeight :'bold',}}>Kilometrage</Text>
        </Pressable>
        <Pressable style={{flex:1, backgroundColor:'#CD6155' ,alignItems: "center", paddingBottom: 15,paddingTop: 15}} onPress={()=>setshouldShoww(!shouldShoww)}>
        <Text style={{color:'white', fontSize:15, fontWeight :'bold',}}>Jours</Text>
        </Pressable>
        <Pressable style={{flex:1, backgroundColor:'#CD6155', alignItems: "center", paddingBottom: 15,paddingTop: 15}} onPress={()=>setshouldShowww(!shouldShowww)}>
        <Text style={{color:'white',fontSize:15, fontWeight :'bold',}}>Heurs de moteurs</Text>
        </Pressable>
        </View>

      {
        shouldShow ? (
           <View>
            <Item style={{backgroundColor:'#C0C0C0',}} >
              <Text style={{fontSize:20, marginTop:13, marginBottom:13}}>Kilometrage</Text>
            </Item>

            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Interval</Text>
              <Input placeholder="Interval" style={{marginLeft: 127}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Dernier service</Text>
              <Input placeholder="Dernier service" style={{marginLeft: 80}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Left</Text>
              <Input placeholder="Left" style={{marginLeft: 150}} />
            </Item>
          </View>

      ): null
      }
      {
        shouldShowww ? (
          <View>
          <Item style={{backgroundColor:'#C0C0C0',}}  >
            <Text style={{fontSize:20, marginTop:13, marginBottom:13,}}>Heurs de moteurs</Text>
          </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Interval</Text>
              <Input placeholder="Interval" style={{marginLeft: 127}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Dernier service</Text>
              <Input placeholder="Dernier service" style={{marginLeft: 80}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Left</Text>
              <Input placeholder="Left" style={{marginLeft: 150}} />
            </Item>
            </View>
      ): null
      }
      {
        shouldShoww ? (
          <View>
          <Item  style={{backgroundColor:'#C0C0C0',}} >
            <Text style={{fontSize:20, marginTop:13,  marginBottom:13,}}>Jours</Text>
          </Item>
            <Item style={styles.formItems}>

              <Text style={styles.textContainer}>Interval</Text>
              <Input placeholder="Interval"style={{marginLeft: 127}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Dernier service</Text>
              <Input placeholder="Dernier service" style={{marginLeft: 80}} />
            </Item>
            <Item style={styles.formItems}>
              <Text style={styles.textContainer}>Left</Text>
              <Input placeholder="Left" style={{marginLeft: 150}} />
            </Item>
            </View>
      ): null
      }
      <Item >
       <Text style={styles.textContainer}>Update last service</Text>
       <Checkboxs> </Checkboxs>
       </Item>
       <ButtonComponent
           label={'Sauvegarder'}
          style={{
             backgroundColor:'#CD6155',
             }}
      />

     </ScrollView>
    </SafeAreaView>


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

export default Vidange;
