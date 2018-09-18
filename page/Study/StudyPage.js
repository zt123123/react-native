import React, { Component } from 'react';
import {  View ,Text,StyleSheet,ScrollView,Image,Button} from 'react-native';

export default class DealPage extends Component<Props>{
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
						<View>
							<Text>公开课</Text>
							<Text>快速学习保险销售小技巧</Text>
							<Button onPress={console.log(1)} title="去了解" />
						</View>
						<View>
							<Text>产品培训</Text>
							<Text>热卖产品深入解读培训</Text>
							<Button onPress={console.log(1)} title="去了解" />
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
		backgroundColor:"#ff0"
		// backgroundColor:"#F5FCFF"
	},
	title:{
		padding:10,
		fontSize:18,
		color:"#000",
		alignItems:"center"
	},
	topBlock:{
		marginTop:10,
		marginBottom:10,
		flexDirection:"row",
		justifyContent:"space-around"
	},
	videoWrapper:{
		marginBottom:10,
		paddingLeft:20,
		backgroundColor:"#fff"
	},
	listWrapper:{

	},
	detail:{
		flexDirection:"row",
		justifyContent:"space-between"
	},
	detailItem:{
		flexDirection:"row",
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