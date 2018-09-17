import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,Alert,ScrollView, Image,ActivityIndicator, Text, FlatList, View } from 'react-native';

import {TabNav} from "./RootPage";

import { StackNavigator } from 'react-navigation';



const App = StackNavigator({
        Main: {
            screen: TabNav,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        }
    });

export default App;