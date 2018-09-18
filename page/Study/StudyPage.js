import React, { Component } from 'react';
import {  View ,Text,StyleSheet,ScrollView,Image,Button} from 'react-native';

export default class DealPage extends Component<Props>{
	constructor(props){
		super(props)
		this.handleKnow=this.handleKnow.bind(this)
	}
	handleKnow(){
		console.log(123)
	}
	render(){
		let videoItem=[1,2,3,4,5,6].map(item=>{
			return (
				<View style={styles.videoWrapper} key={item}>
					<View style={styles.video}>
						<Text>123456789</Text>
					</View>
					<Text>物流保险市场潜力、现状、机遇与挑战</Text>
					<View style={styles.detail}>
						<View style={styles.detailItem}>
							<Image style={styles.detailIcon} source={require('../../img/icons/timer.png')} />
							<Text>2018-08-24</Text>
						</View>
						<View style={styles.detailItem}>
							<Image style={styles.detailIcon} source={require('../../img/icons/view.png')} />
							<Text>2716人学过</Text>
						</View>
						<View style={styles.detailItem}>
							<Image style={styles.detailIcon} source={require('../../img/icons/share.png')} />
							<Text>分享</Text>
						</View>
					</View>
				</View>
			)
		})
		return (
			<View style={styles.studyWrapper}>
				<View style={styles.title}>
					<Text>学习</Text>
				</View>
				<ScrollView>
					<View style={styles.topBlock}>
						<View style={styles.studyItem}>
							<Text style={styles.courseType}>公开课</Text>
							<Text style={styles.courseTip}>快速学习保险销售小技巧</Text>
							<Text style={styles.know} onPress={this.handleKnow}>去了解</Text>
							<Image style={styles.studyImg} source={require('../../img/1.jpg')} />
						</View>
						<View style={styles.studyItem}>
							<Text style={styles.courseType}>产品培训</Text>
							<Text style={styles.courseTip}>热卖产品深入解读培训</Text>
							<Text style={styles.know} onPress={this.handleKnow}>去了解</Text>
							<Image style={styles.studyImg} source={require('../../img/2.jpg')} />
						</View>
					</View>

					<View style={styles.listWrapper}>
						{videoItem}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	studyWrapper:{
		backgroundColor:"#f2f7fc"
	},
	title:{
		backgroundColor:"#fff",
		padding:10,
		fontSize:18,
		color:"#000",
		alignItems:"center"
	},
	topBlock:{
		backgroundColor:"#fff",
		paddingLeft:10,
		paddingTop:10,
		paddingBottom:10,
		marginTop:10,
		marginBottom:10,
		flexDirection:"row",
	},
	studyItem:{
		marginRight:10,
		flex:1,
		padding:10,
		paddingTop:20,
		paddingBottom:20,
		backgroundColor:"#e6f5ff",
		alignItems:"flex-start",
	},
	courseType:{
		fontSize:18,
		color:"#000"
	},
	courseTip:{
		fontSize:10,
		marginBottom:30
	},
	know:{
		color:"#fff",
		borderRadius:10,
		fontSize:10,
		paddingLeft:8,
		paddingRight:8,
		paddingTop:2,
		paddingBottom:2,
		textAlign:"center",
		backgroundColor:"#1296db"
	},
	studyImg:{
		position:"absolute",
		width:50,
		height:50,
		right:10,
		bottom:10
	},
	videoWrapper:{
		marginBottom:10,
		paddingLeft:10,
		paddingRight:10,
		backgroundColor:"#fff"
	},
	listWrapper:{
		paddingBottom:40
	},
	detail:{
		flexDirection:"row",
		justifyContent:"space-between"
	},
	detailItem:{
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center"
	},
	detailIcon:{
		width:16,
		height:16
	},
	video:{
		justifyContent:"center",
		alignItems:"center",
		height:100
	}
});