import React, { Component } from 'react';

import { StyleSheet, Image,Alert,Text } from 'react-native';

import HomePage from './page/Home/HomePage';
import EarnPage from './page/Earn/EarnPage';
import MinePage from './page/Mine/MinePage';
import StudyPage from './page/Study/StudyPage';
import LoginPage from './page/Login/LoginPage';
import {ProductDetail} from './page/Webview/webview.js';

export const navItem = {
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            tabBarLabel: '登陆',
            tabBarIcon: ({ focused }) => {
                let icon = focused ? require("./img/icons/home_active.png") : require("./img/icons/home.png")
                return ( <
                    Image style = { styles.tabBarIcon } source = { icon }
                    />
                );
            },
        }
    },
    EarnPage: {
        screen: EarnPage,
        navigationOptions: {
            tabBarLabel: '去赚钱',
            tabBarIcon: ({ focused }) => {
                let icon = focused ? require("./img/icons/earn_active.png") : require("./img/icons/earn.png")
                return ( <
                    Image style = { styles.tabBarIcon } source = { icon }
                    />
                );
            },
        }
    },
    StudyPage: {
        screen: StudyPage,
        navigationOptions: {
            tabBarLabel: '学习',
            tabBarIcon: ({ focused }) => {
                let icon = focused ? require("./img/icons/study_active.png") : require("./img/icons/study.png")
                return ( <
                    Image style = { styles.tabBarIcon } source = { icon }
                    />
                );
            },
        }
    },
    MinePage: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ focused }) => {
                let icon = focused ? require("./img/icons/my_active.png") : require("./img/icons/my.png")
                return ( <
                    Image style = { styles.tabBarIcon } source = { icon }
                    />
                );
            },
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ focused }) => {
                let icon = focused ? require("./img/icons/home_active.png") : require("./img/icons/home.png")
                return ( <
                    Image style = { styles.tabBarIcon } source = { icon }
                    />
                );
            },
        }
    },
}

export const navIcon = {
    animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 禁止左右滑动
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#1296db',
        inactiveTintColor: '#000',
        showIcon: true,
        showLabel: true,
        upperCaseLabel: false,
        pressColor: '#788493',
        pressOpacity: 0.8,
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop: 1,
            borderTopColor: '#ccc',
        },
        labelStyle: {
            fontSize: 12,
            margin: 1
        },
        indicatorStyle: { height: 0 },
    }
}

export const header = {
    initialRouteName: 'HomePage',
    mode: 'card',
    headerMode: 'screen',
    navigationOptions: ({ navigation, screenProps }) => {
        return {
                headerTintColor: '#000',
                headerTitleStyle: {
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    textAlign:"center"
                },
                headerStyle: {

                },
            headerLeft: (
                <Text 
                    style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    textAlign:"center"
                }}
                    onPress = { () => { navigation.goBack() } }>
                    <Image style={styles.tabBarIcon} source = { require('./img/icons/arrow_r.png') } />
                </Text>
                ),
            headerRight: (
                <Text 
                    onPress = { () => {
                        Alert.alert('Alert Title', 'alertMessage') 
                    }}>
                    <Image style={styles.tabBarIcon} source = { require('./img/icons/arrow_r.png') } />
                </Text>
                )
        }
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21,
    }
})

