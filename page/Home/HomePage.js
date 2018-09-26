import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,PixelRatio,Alert,TouchableNativeFeedback,ScrollView, Image,ActivityIndicator, Text, FlatList, View } from 'react-native';

import Swiper from 'react-native-swiper';

var REQUEST_URL = "http://39.108.170.7:3000/";
var {width,height} = Dimensions.get('window');

import {cmnProductList,cmnBannerList} from "../../utils/ajax"

export default class HomePage extends Component {

    _keyExtractor = (item, index) => item.id+"";
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            bannerData:[],
            loaded: false,
        };
        this.renderMovie = this.renderMovie.bind(this);
    }
    componentDidMount() {
        this.getProductList()
        this.getBannerList()
    }
    async getProductList(){
        let data=await cmnProductList();
        let sortArr=data.rows.sort((a,b)=>a.index_sort-b.index_sort)
        let filterArr=sortArr.filter(item=>item.index_sort>0);
        console.log(filterArr);
        this.setState({
            data:this.state.data.concat(filterArr),
            loaded: true,
        })
    }
    async getBannerList(){
        let data=await cmnBannerList();
        console.log(data);
        this.setState({
           bannerData:data.rows.slice(0,3),
       }) 
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
                          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                          activeDot={<View style={{backgroundColor: '#0f0', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                          paginationStyle={{
                            bottom: 0
                          }} loop>
                          <View style={styles.slide}>
                            <Image resizeMode='stretch' style={styles.image} source={require('../../img/1.jpg')} />
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
        return (
            <TouchableNativeFeedback
                    onPress={() => this.props.navigation.navigate('ProductDetail',{title:item.product_name})}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.containerWrapper}>
                    <Image
                        source={{ uri: item.category_image_url }}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.movieTitle}>{item.product_name}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.company}</Text>
                        <Text>{item.min_premium}</Text>
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
        height: 100
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
