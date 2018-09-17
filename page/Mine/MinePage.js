import React, { Component } from 'react';
import {  View,Text,StyleSheet,Image } from 'react-native';

export default class MinePage extends Component<Props>{
	static navigationOptions = {
	        tabBarLabel: '我的',
	        tabBarIcon: ({focused}) => {
	            if (focused) {
	                return (
	                    <Image style={styles.tabBarIcon} source={require('../../img/icons/my_active.png')}/>
	                );
	            }
	            return (
	                <Image style={styles.tabBarIcon} source={require('../../img/icons/my.png')}/>
	            );
	        },
    };
	render(){
		return (
			<View>
				<Text>MinePage</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 22,
        height: 22,
    }
});