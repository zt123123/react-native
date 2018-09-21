import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,PixelRatio,Alert,TouchableNativeFeedback,ScrollView, Image,ActivityIndicator, Text, FlatList, View } from 'react-native';

import Swiper from 'react-native-swiper';

var REQUEST_URL = "http://192.168.0.192:3000";
var {width,height} = Dimensions.get('window');

export default class HomePage extends Component {

    static navigationOptions = {
      title: '产品中心',
    };

    _keyExtractor = (item, index) => item.id;
    
    constructor(props) {
    	super(props);
    	this.state = {
    		data: [],
    		loaded: false,
    	};
    	this.fetchData = this.fetchData.bind(this);
        this.renderMovie = this.renderMovie.bind(this);
    }
    componentDidMount() {
    	this.fetchData();
    }
    fetchData() {
    	fetch(REQUEST_URL)
    		.then((response) => response.json())
    		.then((responseData) => {
    			console.log(responseData);
    			this.setState({
    				data: this.state.data.concat(responseData.subjects),
    				loaded: true,
    			});
    		});
    }
    render() {
    	if (!this.state.loaded) {
    		return this.renderLoadingView();
    	}

    	return (
            <View style={{flex:1}}>
                <ScrollView style={styles.bigContainer}>
                    <View style={styles.topContainer}>
                        <Swiper style={styles.wrapper}
                          autoplay={true}
                          onMomentumScrollEnd={(e, state, context) => console.log('index:'+state.index)}
                          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                          activeDot={<View style={{backgroundColor: '#0f0', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                          paginationStyle={{
                            bottom: 0
                          }} loop>
                          <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../img/1.jpg')} />
                          </View>
                          <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../img/2.jpg')} />
                          </View>
                          <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../img/3.jpg')} />
                          </View>
                          <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../img/4.jpg')} />
                          </View>
                        </Swiper>
                    </View>
                    <View style={styles.bottomContainer}>
                      <FlatList
                        data={this.state.data}
                        renderItem={this.renderMovie}
                        style={styles.list}
                        keyExtractor={this._keyExtractor}
                      />
                    </View>
                </ScrollView>
            </View>
    	);
    }
    renderLoadingView() {
    	return (
    		<View style={styles.loadingContainer}>
    			<ActivityIndicator size="large" color="#0000ff" />
    			<Text>
    				正在加载数据……
              </Text>
    		</View>
    	);
    }
    renderMovie({ item }) {
    	let directors = item.directors.map(item => {
    		return (
    			<Text key={item.id}>{item.name}&nbsp;&nbsp;</Text>
    		)
    	})

    	let casts = item.casts.map(item => {
    		return (
    			<Text key={item.id}>{item.name}&nbsp;&nbsp;</Text>
    		)
    	})

    	return (
            <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate('ProductDetail')}
                    background={TouchableNativeFeedback.SelectableBackground()}>
        		<View style={styles.containerWrapper}>
        			<Image
        				source={{ uri: item.images.large }}
        				style={styles.thumbnail}
        			/>
        			<View style={styles.rightContainer}>
        				<Text style={styles.movieTitle}>片名:{item.title}</Text>
        				<Text>评分:{item.rating.average}</Text>
        				<Text>导演:{directors}</Text>
        				<Text>主演:{casts}</Text>
        				<Text style={styles.year}>年份:{item.year}</Text>
        			</View>
        		</View>
            </TouchableNativeFeedback>
    	);
    }
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: "#FFF",
        padding: 10,
    },
    bannerTitle: {
        fontSize: 20,
        color: "#000",
        textAlign:"center"
    },
    bigContainer: {
        flexDirection: "column",
        flex: 1
    },
    topContainer: {
        height: 200
    },
    bottomContainer: {
        flex: 1
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
    loadingContainer: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    containerWrapper: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#F5FCFF",
        fontSize: 14,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc'
    },
    thumbnail: {
        width: 100,
        height: 128
    },
    rightContainer: {
        marginLeft: 10,
        flex: 1,
    },
    movieTitle: {
        fontWeight: "bold",
        fontSize: 14,
    },
    list: {
        backgroundColor: '#F5FCFF',
    },
    img: {
        width,
        height: 200,
    }
});
