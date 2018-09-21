import React, { Component } from 'react';
import {  View ,Text,StyleSheet,Image,Button,ToastAndroid} from 'react-native';
import * as WeChat from 'react-native-wechat'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import WebViewComponent from "../Webview/webview"

export default class ProductDetail extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<View style={{flex:1}}>
				{/**<View style={styles.title}>
					<Text style={styles.bannerTitle}>产品中心</Text>
				</View>**/}
				<ScrollableTabView
				    initialPage={0}
				    tabBarBackgroundColor="#fff"
				    tabBarActiveTextColor="#1296db"
				    tabBarTextStyle={{fontSize: 12}}
				    renderTabBar={() => (
				    	<DefaultTabBar 
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
				    <View style={{flex:1}} tabLabel='了解产品'>
				    	<WebViewComponent />
			    	</View>

				    <View tabLabel='营销软文'>
				    	<Text>营销软文</Text>
			    	</View>

				    <View tabLabel='朋友圈助手'>
				    	<Text>朋友圈助手</Text>
			    	</View>

				    <View tabLabel='培训视频'>
				    	<Text>培训视频</Text>
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