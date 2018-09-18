import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,Alert,ScrollView, Image,ActivityIndicator, Text, FlatList, View } from 'react-native';

import {navItem,navIcon} from "./RootPage";

import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator(navItem,navIcon);
