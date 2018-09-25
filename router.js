import React, { Component } from 'react';

import { StyleSheet, Image,Alert,Text } from 'react-native';

import {
    createStackNavigator,
    createTabNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import HomePage from './page/Home/HomePage';
import EarnPage from './page/Earn/EarnPage';
import MinePage from './page/Mine/MinePage';
import StudyPage from './page/Study/StudyPage';
import LoginPage from './page/Login/LoginPage';
import ProductCenter from './page/ProductCenter/ProductCenter';
import ProductDetail from './page/ProductDetail/ProductDetail';

import NavigationBar from './components/NavigationBar';

const HomeTab = createStackNavigator({
    HomePage: {
        screen: HomePage,
        path: '/',
        navigationOptions: () => ({
            headerTitle:<NavigationBar />
        }),
    },
    LoginPage:{
        screen: LoginPage,
        path: '/',
        navigationOptions: () => ({
            title: "登陆注册",
        }),
    },
    ProductDetail:{
        screen: ProductDetail,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: navigation.state.params.title,
        }),
    }
});

const StacksInTabs = createTabNavigator({
    HomePage: {
        screen: HomeTab,
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
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
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
});


const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21,
    }
})

const createRouter=()=>{
    return StacksInTabs
}

export default createRouter

