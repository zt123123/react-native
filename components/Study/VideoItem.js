import React, { Component } from 'react';
import {  View ,Text,StyleSheet,PixelRatio,ToastAndroid,ScrollView,Image,Button} from 'react-native';
import Video from 'react-native-video';

import HttpUtils from '../../utils/ajax'

export default class VideoItem extends Component{
	constructor(props){
		super(props)
		this.state={
			paused:true,
			defaultIndex:-1
		}

		this.handleKnow=this.handleKnow.bind(this)
		this.videoError=this.videoError.bind(this)
		this.onBuffer=this.onBuffer.bind(this)
		this.videoLoad=this.videoLoad.bind(this)
		this.onEnd=this.onEnd.bind(this)
		this.startPlay=this.startPlay.bind(this)
	}

	componentDidMount(){

	}

	getListData(){
		HttpUtils.get()
	}

	startPlay(index){
		this.setState({
			defaultIndex:index,
			paused:!this.state.paused
		})
	}
	handleKnow(){
	}
	videoError(){
	}	
	onBuffer(){
	}
	videoLoad(){
	}
	onEnd(){
	}

	render(){

		let videoSrc="https://www.jubao56.com/res/2018/06/01/17/4739530/整车保-产品介绍（终）_baofeng.mp4.mp4"
		let poster="https://www.jubao56.com/res/2018/06/10/09/5327007/视频封面图-整车保产品介绍.jpg"
		
		let isShowPlayBtn=(index)=>{
			return (this.state.paused?(
				<Text onPress={()=>{this.startPlay(index)}} style={styles.playBtn}>
					<Image source={require("../../img/icons/play_btn.png")} />
				</Text>
			):null)
		}
			

		let videoItem=[1,2,3,4,5,6].map((item,index)=>{
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
						{isShowPlayBtn(index)}
					</View>
					<Text style={styles.videoTitle}>物流保险市场潜力、现状、机遇与挑战{index}</Text>
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

		return videoItem
	}
}

const styles = StyleSheet.create({
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