import React, { Component } from 'react';
import {  View,Text,StyleSheet,PixelRatio,StatusBar,ScrollView,Image } from 'react-native';

export default class MinePage extends Component<Props>{
	render(){

		let list=[
			{
				label:"我的战绩",
				icon:require("../../img/icons/score.png")
			},
			{
				label:"我的微站",
				icon:require("../../img/icons/sites.png")
			},
			{
				label:"单票开票",
				icon:require("../../img/icons/tickets.png")
			},
			{
				label:"我的海报",
				icon:require("../../img/icons/poster.png")
			},
			{
				label:"我的消息",
				icon:require("../../img/icons/message.png")
			},
			{
				label:"我的设置",
				icon:require("../../img/icons/settings.png")
			}
		]

		let listItem=list.map(item=>{
				return (
					<View key={item.label} style={styles.listItem}>
						<View style={styles.listItemIcon}>
							<Image style={styles.icons}  source={item.icon}/>
							<Text style={styles.boldFont}>{item.label}</Text>
						</View>
						<Image style={styles.icons}  source={require('../../img/icons/arrow_r.png')}/>
					</View>
				)
			})

let statusBar=(
<View style={styles.container}>  
        <StatusBar  
         animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
         hidden={true}  //是否隐藏状态栏。  
         translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
         barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
        >  
        </StatusBar>  
      </View>
)

		return (
			<ScrollView style={styles.wrapper}>
				<View style={styles.avatarWrapper}>
					<View style={styles.avatar}>
						<Image style={styles.avatarIcon}  source={require('../../img/1.jpg')}/>
						<View style={styles.phone}>
							<Text style={styles.phoneLabel}>13125066078</Text>
							<Text style={styles.authentication}>未认证</Text>
						</View>
					</View>
					<View style={styles.codeIconWrapper}>
						<Image style={styles.codeIcon}  source={require('../../img/icons/qrcode.png')}/>
					</View>
				</View>
				<View style={styles.feeWrapper}>
					<View style={styles.feeIconWrapper}>
						<Text style={styles.feeCount}>0.00</Text>
						<Text>累计保费</Text>
					</View>
					<View style={styles.feeIconWrapper}>
						<Text style={styles.feeCount}>0.00</Text>
						<Text>本月保费</Text>
					</View>
					<View style={styles.feeIconWrapper}>
						<Text style={styles.feeCount}>0.00</Text>
						<Text>昨日保费</Text>
					</View>
				</View>
				<View style={styles.orderWrapper}>
					<View  style={styles.myOrderLabel} >
						<View style={styles.myOrderIcon}>
							<Image style={styles.iconOrder}  source={require('../../img/icons/orders.png')}/>
							<Text style={styles.boldFont}>我的保单</Text>
						</View>
						<Image style={styles.effectiveIcon}  source={require('../../img/icons/arrow_r.png')}/>
					</View>
					<View  style={styles.myOrder} >
						<View style={styles.effectiveIconWrapper}>
							<Image style={styles.effectiveIcon}  source={require('../../img/icons/not_effective.png')}/>
							<Text>未生效</Text>
						</View>
						<View style={styles.effectiveIconWrapper}>
							<Image style={styles.effectiveIcon}  source={require('../../img/icons/effective.png')}/>
							<Text>已生效</Text>
						</View>
						<View style={styles.effectiveIconWrapper}>
							<Image style={styles.effectiveIcon} source={require('../../img/icons/miss_effective.png')}/>
							<Text>已失效</Text>
						</View>
					</View>
				</View>

				<View style={styles.dashbord}>
					{listItem}
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	wrapper:{
		backgroundColor:"#eee"
	},
	avatarWrapper:{
		paddingTop:20,
		paddingBottom:20,
		flexDirection:"row",
		backgroundColor:"#1296db",
		justifyContent:"space-around",
		alignItems:"center"
	},
	avatar:{
		flexDirection:"row",
		justifyContent:"center"
	},
	avatarIcon:{
		borderRadius:40,
		width:80,
		height:80
	},
	phone:{
		marginLeft:10,
		flexDirection:"column",
		justifyContent:"center",
		alignItems:"flex-start",
	},
	phoneLabel:{
		color:"#fff"
	},
	authentication:{
		color:"#fff",
		borderRadius:10,
		borderWidth:1 / PixelRatio.get(),
		marginTop:10,
		paddingLeft:5,
		paddingRight:5,
		textAlign:"center",
		borderColor:"#fff"
	},
	feeWrapper:{
		padding:10,
		backgroundColor:"#fff",
		flexDirection:"row",
		justifyContent:"space-around"
	},
	feeCount:{
		color:"orange"
	},
	feeIconWrapper:{
		alignItems:"center"
	},
	orderWrapper:{
		backgroundColor:"#fff",
		marginTop:10,
		marginBottom:10,
	},
	myOrder:{
		flexDirection:"row",
		justifyContent:"space-around",
		padding:20
	},
	myOrderLabel:{
		padding:10,
		borderBottomColor:"#ccc",
		borderBottomWidth:1 / PixelRatio.get(),
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center"
	},
	dashbord:{
		backgroundColor:"#fff"
	},
	listItem:{
		padding:10,
		flexDirection:"row",
		justifyContent:"space-between",
		borderBottomColor:"#ccc",
		borderBottomWidth:1 / PixelRatio.get(),
	},
	listItemIcon:{
		flexDirection:"row",
		alignItems:"center"
	},
	codeIconWrapper:{
		width:40,
		height:40,
		backgroundColor:"rgba(0,0,0,0.15)",
		borderRadius:20,
		justifyContent:"center",
		alignItems:"center"
	},
	codeIcon:{
		width:26,
		height:26,
	},	
	effectiveIconWrapper:{
		alignItems:"center"
	},
	effectiveIcon:{
		width:24,
		height:24,
	},
	myOrderIcon:{
		flexDirection:"row",
		alignItems:"center"
	},
	iconOrder:{
		width:24,
		height:24,
		marginRight:10
	},
	icons:{
		width:24,
		height:24,
		marginRight:10
	},
	boldFont:{
		color:"#000",
		fontSize:18
	}
});