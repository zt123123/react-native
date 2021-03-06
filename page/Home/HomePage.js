import React, { Component } from 'react';
import { Platform, Dimensions,StyleSheet,PixelRatio,
    Alert,TouchableNativeFeedback,ScrollView, Image,
    ActivityIndicator, Text, FlatList, View ,
    RefreshControl,Linking
} from 'react-native';

import {
  isFirstTime,
  isRolledBack,
  packageVersion,
  currentVersion,
  checkUpdate,
  downloadUpdate,
  switchVersion,
  switchVersionLater,
  markSuccess,
} from 'react-native-update';

import _updateConfig from '../../update.json';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import {cmnProductList,cmnBannerList} from "../../utils/ajax"

import ProductItem from "../../components/ProductItem"

const {width,height} = Dimensions.get('window');
const {appKey} = _updateConfig[Platform.OS];

export default class HomePage extends Component {

    _keyExtractor = (item, index) => item.id+"";
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            bannerData:[],
            loaded: false,
            refreshing:false,
        };
        this.renderMovie = this.renderMovie.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentWillMount(){
        if (isFirstTime) {
          Alert.alert('提示', '这是当前版本第一次启动,是否要模拟启动失败?失败将回滚到上一版本', [
            {text: '是', onPress: ()=>{throw new Error('模拟启动失败,请重启应用')}},
            {text: '否', onPress: ()=>{markSuccess()}},
          ]);
        } else if (isRolledBack) {
          Alert.alert('提示', '刚刚更新失败了,版本被回滚.');
        }
    }

    doUpdate(info){
        downloadUpdate(info).then(hash => {
          Alert.alert('提示', '下载完毕,是否重启应用?', [
            {text: '是', onPress: ()=>{switchVersion(hash);}},
            {text: '否',},
            {text: '下次启动时', onPress: ()=>{switchVersionLater(hash);}},
          ]);
        }).catch(err => { 
          Alert.alert('提示', '更新失败.');
        });
    }

    checkUpdate(){
        checkUpdate(appKey).then(info => {
          if (info.expired) {
            Alert.alert('提示', '您的应用版本已更新,请前往应用商店下载新的版本', [
              {text: '确定', onPress: ()=>{info.downloadUrl && Linking.openURL(info.downloadUrl)}},
            ]);
          } else if (info.upToDate) {
            Alert.alert('提示', '您的应用版本已是最新.');
          } else {
            Alert.alert('提示', '检查到新的版本'+info.name+',是否下载?\n'+ info.description, [
              {text: '是', onPress: ()=>{this.doUpdate(info)}},
              {text: '否',},
            ]);
          }
        }).catch(err => { 
          Alert.alert('提示', '更新失败.');
        });
    }

    componentDidMount() {
        this.checkUpdate()
        this.getProductList()
        this.getBannerList()
    }
    _onRefresh(){
        this.setState({refreshing: true});
        this.getProductList().then(() => {
            this.setState({refreshing: false});
        });
    }
    async getProductList(){
        let data=await cmnProductList();
        let sortArr=data.rows.sort((a,b)=>a.index_sort-b.index_sort)
        let filterArr=sortArr.filter(item=>item.index_sort>0);
        this.setState({
            data:filterArr,
            loaded: true,
        })
    }
    async getBannerList(){
        let data=await cmnBannerList();
        this.setState({
           bannerData:data.rows.slice(0,3),
       }) 
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        let banner=this.state.bannerData.map(item=>{
            return (
                <View style={styles.slide} key={item}>
                  <Image resizeMode='stretch' style={styles.image} 
                  source={{uri:item.image_url}} />
                </View>
            )
        })


        return (
            <View style={{flex:1,backgroundColor:"#fff"}}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        />
                    }
                    style={styles.bigContainer}>
                    <View style={styles.topContainer}>
                        <Swiper style={styles.wrapper}
                          autoplay={true}
                          dot={<View style={styles.dotView} />}
                          activeDot={<View style={styles.activeDotView} />}
                          paginationStyle={{
                            bottom: 0
                          }} loop>
                          {banner}
                        </Swiper>
                    </View>
                    <Text style={styles.object}>展业助手</Text>
                    <View style={styles.helper}>
                        <LinearGradient 
                        style={styles.helperItem} 
                        colors={['#288aec', '#3ab2f6']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        >
                            <View style={styles.helperItemWrappper}>
                                <Text style={[styles.desc,{fontSize:18}]}>去赚钱</Text>
                                <Text style={styles.desc}>营销资料&nbsp;帮您轻松展业</Text>
                            </View>
                        </LinearGradient>

                        <LinearGradient  
                        style={styles.helperItem} 
                        colors={["#fc654b","#f3ca28"]}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}
                        >
                            <View style={styles.helperItemWrappper}>
                                <Text style={[styles.desc,{fontSize:18}]}>去学习</Text>
                                <Text style={styles.desc}>培训资料&nbsp;帮您快速成长</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <Text style={styles.object}>热门产品</Text>
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
        let {navigation}=this.props
        return (
            <TouchableNativeFeedback>
                <ProductItem navigation={navigation} item={item} />
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
    dotView:{
        backgroundColor: 'rgba(255,255,255,0.6)', 
        width: 40, 
        height: 5, 
        borderRadius: 4,
        margin: 3,
    },
    activeDotView:{
        backgroundColor: '#fff',
        width: 40, 
        height: 5, 
        borderRadius: 4,
        margin: 3,
    },
    bigContainer: {
        flexDirection: "column",
        flex: 1
    },
    object:{
        borderLeftWidth:4,
        paddingLeft:6,
        borderLeftColor:"#06acf9",
        marginTop:10,
        marginLeft:10,
        fontSize:16
    },
    helper:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    helperItem:{
        height:80,
        flex:1,
        borderRadius:10,
        margin:5,
    },
    helperItemWrappper:{
        flex:1,
        padding:10,
        justifyContent:"space-around",
    },
    desc:{
        color:"#fff"
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
});
