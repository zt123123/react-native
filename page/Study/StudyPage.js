import React, { Component } from 'react';
import {  View ,Text,StyleSheet,PixelRatio,ToastAndroid,ScrollView,Image,Button} from 'react-native';
import VideoItem from "../../components/Study/VideoItem"
import {videoList} from "../../utils/ajax"

export default class StudyPage extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}

	componentDidMount() {
	    this.getVideoList()
	}

	async getVideoList(){
	    let data=await videoList();
	    this.setState({
	    	data:data.rows
	    })
	}

	render(){
		let videoList=this.state.data.map(item=>{
			return (
				<VideoItem key={item.id} data={item} />
			)
		})
		return (
			<View style={styles.studyWrapper}>
				<View style={styles.title}>
					<Text  style={styles.bannerTitle}>学习</Text>
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
						{videoList}
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
	bannerTitle:{
		fontSize:20,
		color:"#000",
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
	
	listWrapper:{
		paddingBottom:40
	}
});