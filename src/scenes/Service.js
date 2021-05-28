import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import HeaderComponent from '../components/HeaderComponent';
import { Icon } from 'react-native-elements';



class Service extends Component {

  render() {
    return (
   




      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <HeaderComponent label='Service' 
    style={{paddingBottom: 15,paddingTop: 15, backgroundColor:'#C0C0C0'}}/>

        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Autres" onPress={() => this.props.navigation.navigate('Autres')}>
          <Icon name='fa-gear' type='font-awesome-6'color='#A71F3C' />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Vidange" onPress={() => this.props.navigation.navigate('Vidange')}>
          <Icon name='fa-gear' type='font-awesome-6'color='#A71F3C' /> 
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Visite Technique" onPress={() => this.props.navigation.navigate('VisiteTechnique')}>
          <Icon name='align-justify' type='font-awesome-6'color='#A71F3C' /> 
          </ActionButton.Item>
      
        <ActionButton.Item buttonColor='#1abc9c' title="Assurance" onPress={() => this.props.navigation.navigate('Assurance')}>
            <Icon name='align-justify' type='font-awesome-6' color='#A71F3C' />
          </ActionButton.Item>
        </ActionButton>

      </View>
    );
  }

}
export default Service;

