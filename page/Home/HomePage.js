import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,Alert,ScrollView, Image,ActivityIndicator, Text, FlatList, View } from 'react-native';

import Swiper from 'react-native-swiper';

var REQUEST_URL = "http://192.168.0.192:3000";
var {width,height} = Dimensions.get('window');
type Props = {};

export default class HomePage extends Component<Props>{
	static navigationOptions = {
	        tabBarLabel: '首页',
	        tabBarIcon: ({focused}) => {
	            if (focused) {
	                return (
	                    <Image style={styles.tabBarIcon} source={require('../../img/icons/home_active.png')}/>
	                );
	            }
	            return (
	                <Image style={styles.tabBarIcon} source={require('../../img/icons/home.png')}/>
	            );
	        },
    };

	render(){
		return (
			<View>
				<Text>HomePage</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 21,
        height: 21,
    },
    	bigContainer:{
    		flexDirection:"column",
    		flex:1
    	},
    	topContainer: {
    	    height:200
    	  },
    	bottomContainer: {
    	    flex:1
      	},

    	  wrapper: {
    		
    	  },

    	  slide: {
    	    flex: 1,
    	    justifyContent: 'center',
    	    backgroundColor: 'transparent'
    	  },
    	  text: {
    	    color: '#fff',
    	    fontSize: 30,
    	    fontWeight: 'bold'
    	  },

    	  image: {
    	    width,
    	    flex: 1
    	  },


    	loadingContainer:{
    		flexDirection: 'column',
    		justifyContent: "center",
    		alignItems:"center",
    		flex:1
    	},
    	containerWrapper: {
    		padding:10,
    		flex: 1,
    		flexDirection: 'row',
    		backgroundColor: "#F5FCFF",
    		fontSize: 14,
    		borderBottomWidth:1,
    		borderBottomColor:'#eee'
    	},
    	thumbnail: {
    		width: 100,
    		height: 128
    	},
    	rightContainer: {
    		marginLeft:10,
    		flex: 1,
    	},
    	title: {
    		fontWeight:"bold",
    		fontSize: 14,
    	},
    	year: {
    	},
    	list: {
    		backgroundColor: '#F5FCFF',
    	},
        img: {
            width,
            height: 200,
        }
});