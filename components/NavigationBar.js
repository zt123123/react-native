import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,TextInput,Alert  } from 'react-native';
import PropTypes from 'prop-types';

import Icon from "react-native-vector-icons/Ionicons"

export default class NavigationBar extends Component{
	static propTypes={
		// style:View.propTypes.style,
		title:PropTypes.string,
		titleView:PropTypes.element,
		hide:PropTypes.bool,
		showLeft:PropTypes.bool,
		showRight:PropTypes.bool,
		leftButton:PropTypes.element,
		rightButton:PropTypes.element,
	}

	constructor(props) {
    	super(props);
    	this.state={
    		title:"",
    		hide:false
    	}
  	}


	render(){
		let {title,titleView,hide,showLeft,showRight,leftButton,rightButton}=this.props
		let titleComponent=titleView?titleView:(<View style={styles.titleContainer}><Text  style={styles.title}>{title}</Text></View>)
		return (
			<View style={styles.titleWrapper}>
				{showLeft?(leftButton?leftButton:(<Icon name="ios-phone-portrait" size={25} />)):null}
				{titleComponent}
				{showRight?(rightButton?rightButton:(<Icon name="ios-notifications-outline" size={25} />)):null}
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
	titleContainer:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
	},
	title:{
		color:"#333",
		fontSize:18,
	}
});