import React, { Component } from 'react';

import {  StyleSheet,Image } from 'react-native';

import HomePage from './page/Home/HomePage';
import EarnPage from './page/Earn/EarnPage';
import MinePage from './page/Mine/MinePage';
import StudyPage from './page/Study/StudyPage';
import LoginPage from './page/Login/LoginPage';

export const navItem= 
    {
        StudyPage: {
            screen: StudyPage,
            navigationOptions: {
                    tabBarLabel: '学习',
                    tabBarIcon: ({focused}) => {
                        let icon=focused?require("./img/icons/study_active.png"):require("./img/icons/study.png")
                        return (
                            <Image style={styles.tabBarIcon} source={icon}/>
                        );
                    },
            }
        }, 
        MinePage: {
            screen: MinePage,
            navigationOptions: {
                    tabBarLabel: '我的',
                    tabBarIcon: ({focused}) => {
                        let icon=focused?require("./img/icons/my_active.png"):require("./img/icons/my.png")
                        return (
                            <Image style={styles.tabBarIcon} source={icon}/>
                        );
                    },
            }
        },
        LoginPage: {
            screen: LoginPage,
            navigationOptions: {
                    tabBarLabel: '登陆',
                    tabBarIcon: ({focused}) => {
                        let icon=focused?require("./img/icons/home_active.png"):require("./img/icons/home.png")
                        return (
                            <Image style={styles.tabBarIcon} source={icon}/>
                        );
                    },
            }
        },  
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                    tabBarLabel: '首页',
                    tabBarIcon: ({focused}) => {
                        let icon=focused?require("./img/icons/home_active.png"):require("./img/icons/home.png")
                        return (
                            <Image style={styles.tabBarIcon} source={icon}/>
                        );
                    },
            }
        },   
        EarnPage: {
            screen: EarnPage,
            navigationOptions: {
                    tabBarLabel: '去赚钱',
                    tabBarIcon: ({focused}) => {
                        let icon=focused?require("./img/icons/earn_active.png"):require("./img/icons/earn.png")
                        return (
                            <Image style={styles.tabBarIcon} source={icon}/>
                        );
                    },
            }
        },   
  

}

export const navIcon=     {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#1296db',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
        }
    }


const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21,
    }
})