/**
 * @format
 */
import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';


import Apps from './src/navigation/Apps';
import DateComponent from './src/components/DateComponent';
import ExpandableComponent from './src/components/ExpandableComponent';
import ButtonExpandable from './src/components/ButtonExpandable';

import Service from './src/scenes/Service';

AppRegistry.registerComponent('TrackingApp', () =>ButtonExpandable);
