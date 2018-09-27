import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,PixelRatio,
    Alert,TouchableNativeFeedback,ScrollView, Image,
    ActivityIndicator, Text, FlatList, View ,
    RefreshControl
} from 'react-native';

const {width,height} = Dimensions.get('window');

export default class ProductItem extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	        data: [],
	    };
	}


	render(){
		let {item} =this.props;
		if(item){
			return (
				<TouchableNativeFeedback
				        onPress={() => this.props.navigation.navigate('ProductDetail',{title:item.product_name,url:item.jump_url})}
				        background={TouchableNativeFeedback.SelectableBackground()}>
					<View style={styles.containerWrapper}>
					    <Image
					        source={{ uri: item.category_image_url }}
					        style={styles.thumbnail}
					    />
					    <View style={styles.rightContainer}>
					        <View>
					            <Text style={styles.movieTitle}>{item.product_name}</Text>
					            <Text>{item.description}</Text>
					        </View>
					        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
					            <Text><Text style={styles.minPrice}>{item.min_premium}元</Text>起</Text>
					            <Text style={styles.company}>{item.company}</Text>
					        </View>
					    </View>
					</View>
				</TouchableNativeFeedback>
			)
		}
	}
}

const styles=StyleSheet.create({
	containerWrapper: {
	    padding: 10,
	    flex: 1,
	    flexDirection: 'row',
	    fontSize: 14,
	    borderBottomWidth: 1 / PixelRatio.get(),
	    borderBottomColor: '#ccc'
	},
	thumbnail: {
	    width: 100,
	    height: 100
	},
	rightContainer: {
	    justifyContent:"space-between",
	    marginLeft: 10,
	    paddingTop:5,
	    paddingBottom:5,
	    flex: 1,
	},
	movieTitle: {
	    fontWeight: "bold",
	    fontSize: 16,
	},
	minPrice:{
	    color:"#ff6600"
	},
	company:{
	    color:"#06acf9",
	    paddingTop:2,
	    paddingBottom:2,
	    paddingLeft:5,
	    paddingRight:5,
	    fontSize:12,
	    borderRadius:5,
	    borderWidth:1,
	    borderColor:"#06acf9"
	},
	img: {
	    width,
	    height: 200,
	}
})