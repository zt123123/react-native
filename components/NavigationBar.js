import React, { Component } from 'react';
import {  View,Text,StyleSheet,Image,TextInput,Alert  } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"

export default class NavigationBar extends Component<Props>{
	constructor(props) {
    	super(props);
  	}


	render(){

		return (
			<View style={styles.titleWrapper}>
				<Icon name="ios-phone-portrait" size={25} />
				<Text  style={styles.title}>首页</Text>
				<Icon name="ios-notifications-outline" size={25} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	titleWrapper:{
		flexDirection:"row",
		flex:1,
		paddingLeft:10,
		paddingRight:10,
		backgroundColor:"#fff",
		justifyContent:"space-between",
		alignItems:"center",
	},
	title:{
		color:"#333",
		fontSize:18,
	}
});