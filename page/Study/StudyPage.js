import React, { Component } from 'react';
import {  View ,Text,StyleSheet,PixelRatio,ToastAndroid,ScrollView,Image,Button} from 'react-native';
import Video from 'react-native-video';

export default class DealPage extends Component{
	constructor(props){
		super(props)
		this.state={
			paused:true
		}

		this.handleKnow=this.handleKnow.bind(this)
		this.videoError=this.videoError.bind(this)
		this.onBuffer=this.onBuffer.bind(this)
		this.videoLoad=this.videoLoad.bind(this)
		this.onEnd=this.onEnd.bind(this)
		this.startPlay=this.startPlay.bind(this)
	}
	startPlay(){
		this.setState({
			paused:!this.state.paused
		})
		// ToastAndroid.show("startPlay", ToastAndroid.SHORT);
	}
	handleKnow(){
		ToastAndroid.show("handleKnow", ToastAndroid.SHORT);
	}
	videoError(){
		// ToastAndroid.show("videoError", ToastAndroid.SHORT);
	}	
	onBuffer(){
		// ToastAndroid.show("onBuffer", ToastAndroid.SHORT);
	}
	videoLoad(){
		// ToastAndroid.show("videoLoad", ToastAndroid.SHORT);
	}
	onEnd(){
		// ToastAndroid.show("onEnd", ToastAndroid.SHORT);
	}

	render(){
		let videoSrc="https://www.jubao56.com/res/2018/06/01/17/4739530/整车保-产品介绍（终）_baofeng.mp4.mp4"
		let poster="https://www.jubao56.com/res/2018/06/10/09/5327007/视频封面图-整车保产品介绍.jpg"
		
		let isShowPlayBtn=
			this.state.paused?(
				<Text onPress={this.startPlay} style={styles.playBtn}>
					<Image source={require("../../img/icons/play_btn.png")} />
				</Text>
			):null

		let videoItem=[1,2,3,4,5,6].map(item=>{
			return (
				<View style={styles.videoWrapper} key={item}>
					<View style={styles.video}>
						<Video
						 	source={{ uri: videoSrc}} 
						    ref={(ref) => {
						        this.player = ref
						    }}
						    // poster={poster}
						    // posterResizeMode="cover"
						    resizeMode="cover"
						    paused={this.state.paused}
						    onBuffer={this.onBuffer}
				            onEnd={this.onEnd}
				            onLoad={this.videoLoad}
				            onError={this.videoError}
				            style={styles.backgroundVideo}
						/>
						{isShowPlayBtn}
					</View>
					<Text style={styles.videoTitle}>物流保险市场潜力、现状、机遇与挑战</Text>
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
	videoWrapper:{
		marginBottom:10,
		padding:10,
		backgroundColor:"#fff"
	},
	videoTitle:{
		marginTop:10,
		paddingBottom:10,
		borderBottomWidth:1 / PixelRatio.get(),
		borderBottomColor:"#ccc",
	},
	listWrapper:{
		paddingBottom:40
	},
	detail:{
		marginTop:10,
		flexDirection:"row",
		justifyContent:"space-between"
	},
	detailItem:{
		flexDirection:"row",
		justifyContent:"center",
		alignItems:"center"
	},
	detailIcon:{
		marginRight:5,
		width:16,
		height:16
	},
	video:{
		justifyContent:"center",
		alignItems:"center",
		height:200
	},
	backgroundVideo: {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	},
	playBtn:{
		width:50,
		height:50,
		textAlign:"center",
	}
});