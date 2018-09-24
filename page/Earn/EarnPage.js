import React, { Component } from 'react';
import {  View ,Text,StyleSheet,Image,Button,ToastAndroid} from 'react-native';
import * as WeChat from 'react-native-wechat'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default class TaskPage extends Component{
	render(){
		return (
			<View style={{flex:1}}>
				<View style={styles.title}>
					<Text style={styles.bannerTitle}>产品中心</Text>
				</View>
				<ScrollableTabView
				    initialPage={0}
				    tabBarBackgroundColor="#fff"
				    tabBarActiveTextColor="#1296db"
				    tabBarTextStyle={{fontSize: 12}}
				    renderTabBar={() => (
				    	<ScrollableTabBar 
				    		style={{
				    			borderWidth:0,
				    			paddingLeft:10
				    		}} 
				    		tabStyle={{
				    			marginRight:10,
				    		}}
				    		underlineStyle={{
				    			backgroundColor:"#1296db",
				    			height:2
				    		}} />
				    	)}
				 >
				    <View tabLabel='货运险'>
				    	<Text>货运险</Text>
			    	</View>

				    <View tabLabel='人员险'>
				    	<Text>人员险</Text>
			    	</View>

				    <View tabLabel='财产险'>
				    	<Text>财产险</Text>
			    	</View>

				    <View tabLabel='健康险'>
				    	<Text>健康险</Text>
			    	</View>

				    <View tabLabel='责任险'>
				    	<Text>责任险</Text>
			    	</View>
				</ScrollableTabView>
		  	</View>
		)
	}
}

const styles = StyleSheet.create({
	title:{
		backgroundColor:"#fff",
		padding:10,
		alignItems:"center"
	},
	bannerTitle:{
		fontSize:20,
		color:"#000",
	}
});