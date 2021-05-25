/*Example of Expandable ListView in React Native*/
import React, { Component,useState, useEffect } from 'react';
//import react in our project
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
//import basic react native components

const ExpandableeComponent = ({item, onClickFunction}) => {
  const [layoutHeight, setlayoutHeight]=useState(0);

  useEffect(()=>
{
  if(item.isExpanded){
    setlayoutHeight(null);
  } else{
  setlayoutHeight(0);
  }
},
[item.isExpanded])
  return(
  <View>
  <TouchableOpacity style={styles.item}
  onPress={onClickFunction}>
  <View style={{flexDirection:'row'}}>
  <Text style={styles.itemText}>
  {item.category_name}
  </Text>
  <Text style={styles.info}>
   {item.Longueur_info}
  </Text>
  <Text style={styles.info}>
   {item.vitess_info}
  </Text>
  </View>
  </TouchableOpacity>
  <View style={{
    height: layoutHeight,
    overflow: 'hidden'
  }}>

{item.subcategory.map((item, key)=>(
  <TouchableOpacity
  key={key}
  style={styles.content}>
  <Text style={styles.Text}>
  {item.category} :  {item.val}
  </Text>
  <View style={styles.separator} />
  </TouchableOpacity>
))}

  </View>
  </View>
  )


}

const ExpandableComponent = () => {

  const [listDataSource, setlistDataSource]=useState(CONTENT);
  const updateLayout=(index)=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];


      array.map((value, placeindex)=>
    placeindex === index
  ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded'] : (array[placeindex]['isExpanded']) = false);

    setlistDataSource(array)
  }

  return(
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.TitleText}>
    Rapport quotidien
    </Text>

    </View>
    <ScrollView>
    {
      listDataSource.map((item,key)=>(

        <ExpandableeComponent
        
        key={item.category_name}
        item={item}
        onClickFunction={()=>{
          updateLayout(key)
        }}
        />

      )
    )
    }
    </ScrollView>
    </View>
    </SafeAreaView>
  )


}
 export default ExpandableComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection:'row',
    padding: 10,
  },
 TitleText:{
   flex:1,
   fontSize:22,
   fontWeight:'bold',
   textAlign:'center',
 },
 headerButton:{
   textAlign:'center',
   justifyContent:'center',
   fontSize: 18,
 },
 item:{
   backgroundColor:'#C0C0C0',
   padding: 20,
 },
 itemText:{
   fontSize:16,
   fontWeight:'500',
   flex:1,
 },
 content:{
   paddingLeft: 10,
   paddingRight: 10,
 },
 Text:{
   fontSize:16,
   padding:10,
 },
 separator:{
   height:0.5,
   backgroundColor:'#C0C0C0',
   width:'100%',
 },
 info:{
  flex:1,
 },
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Dacia Docker',
    Longueur_info:'Longueur/km',
    vitess_info:'vitesse maximal',
    subcategory: [{ category : 'Vitesse moyen', val: '0 km/h' }, { category: 'Duréé de mouvement', val: '0 s' },
     { category: 'Duréé arret', val: '13 H 22 min 6 s' }, { category: 'Travail de moteur', val: '6 min 6 s' }
   , { category: 'Ralenti de moteur', val: '6 min 6 s' }],
  },
  {
    isExpanded: false,
    category_name: 'CLIO 4 24270 B 15',
    Longueur_info:'Longueur/km',
    vitess_info:'vitesse maximal',
    subcategory: [{ category : 'Vitesse moyen', val: '0 km/h' }, { category: 'Duréé de mouvement', val: '0 s' },
     { category: 'Duréé arret', val: '13 H 22 min 6 s' }, { category: 'Travail de moteur', val: '6 min 6 s' }
   , { category: 'Ralenti de moteur', val: '6 min 6 s' }],
  },
  {
    isExpanded: false,
    category_name: 'CLIO4 rouge',
    Longueur_info:'Longueur/km',
    vitess_info:'vitesse maximal',
    subcategory: [{ category : 'Vitesse moyen', val: '0 km/h' }, { category: 'Duréé de mouvement', val: '0 s' },
     { category: 'Duréé arret', val: '13 H 22 min 6 s' }, { category: 'Travail de moteur', val: '6 min 6 s' }
   , { category: 'Ralenti de moteur', val: '6 min 6 s' }],
  },
  {
    isExpanded: false,
    category_name: 'JUMPY 15933 B 7',
    Longueur_info:'Longueur/km',
    vitess_info:'vitesse maximal',
    subcategory: [{ category : 'Vitesse moyen', val: '0 km/h' }, { category: 'Duréé de mouvement', val: '0 s' },
     { category: 'Duréé arret', val: '13 H 22 min 6 s' }, { category: 'Travail de moteur', val: '6 min 6 s' }
   , { category: 'Ralenti de moteur', val: '6 min 6 s' }],
  },

];
