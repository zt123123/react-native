import React, { Component } from 'react';

import { StyleSheet, Image,Alert,Text } from 'react-native';
import { ScrollView, StatusBar } from 'react-native';
import {
    SafeAreaView,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import HomePage from './page/Home/HomePage';
import EarnPage from './page/Earn/EarnPage';
import MinePage from './page/Mine/MinePage';
import StudyPage from './page/Study/StudyPage';
import LoginPage from './page/Login/LoginPage';
import ProductCenter from './page/ProductCenter/ProductCenter';
import ProductDetail from './page/ProductDetail/ProductDetail';
import createRouter from './RootPage';

export default createRouter();