import React, { Component } from 'react';
import {AsyncStorage,ScrollView, View ,Alert,Text,StyleSheet,Image,
	TouchableNativeFeedback,Button,ToastAndroid,
	RefreshControl
} from 'react-native';
import * as WeChat from 'react-native-wechat'
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view';
import StorageUtils from "../../utils/storage"
import {categoryList,cmnProductList} from "../../utils/ajax"
import ProductItem from "../../components/ProductItem"

export default class EarnPage extends Component{
	static navigationOptions = {
	   tabBarOnPress:(param)=>{
	   		console.log(param)
	   },
	 };
	constructor(props){
		super(props)
		this.state={
			categoryList:[],
			refreshing:false,
			categoryId:-1,
			productList:[]
		}
		this.onChangeTab=this.onChangeTab.bind(this)
		this._onRefresh=this._onRefresh.bind(this)
	}
	componentDidMount(){
		this.getCategoryList()
	}
	_onRefresh(){
		let id=this.state.categoryId
		this.setState({refreshing: true});
		this.getProductList(id).then(() => {
		    this.setState({refreshing: false});
		});
	}
	onChangeTab(param){
		this.setState({
			categoryId:param.ref.props.id
		})
		this.getProductList(param.ref.props.id)
	}
	async getCategoryList(){
		let res=await categoryList({type:3});
		this.getProductList(res.rows[0].id);

		this.setState({
			categoryList:res.rows,
		})
	}
	async getProductList(id){
		let productList=await cmnProductList({category_id:id});
		this.setState({
			productList:productList.rows
		})
	}
	render(){

		let {navigation}=this.props
		let productList=this.state.productList.map(item=>{
			let pro=item.products.map(items=>{
				return  (
						<View key={items.id}>
							<ProductItem 
								navigation={navigation}
								key={items.id} 
								item={items} 
							/>
						</View>
				)
			})

			return (
				<View key={item.id}>
					{item.name=='更多'?null:(<Text style={styles.object}>{item.name}</Text>)}
					{pro}
				</View>
			)
		})
		
		let tabView=this.state.categoryList.map(item=>{
			return (
			    <ScrollView
			    	style={styles.scrollContainer}
					refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh}
						/>
					}
					key={item.id}
					id={item.id}
					tabLabel={item.name}
			      >
		    	    {productList}
		    	</ScrollView>
			)
		})

		return (
			<View style={{flex:1}}>
				<ScrollableTabView
				    initialPage={0}
				    onChangeTab={this.onChangeTab}
				    tabBarBackgroundColor="#fff"
				    tabBarActiveTextColor="#1296db"
				    tabBarTextStyle={{fontSize: 12}}
				    renderTabBar={() => (
				    	<ScrollableTabBar 
				    		style={{
				    			borderWidth:0,
				    			paddingLeft:10
				    		}} 
				    		tabStyle={{
				    			marginRight:10,
				    		}}
				    		underlineStyle={{
				    			backgroundColor:"#1296db",
				    			height:2
				    		}} />
				    	)}
				 >
				    {tabView}
				</ScrollableTabView>
		  	</View>
		)
	}
}

const styles = StyleSheet.create({
	title:{
		backgroundColor:"#fff",
		padding:10,
		alignItems:"center"
	},
	bannerTitle:{
		fontSize:20,
		color:"#000",
	},
	scrollContainer:{
		marginTop:5,
		backgroundColor:"#fff"
	},
	object:{
	    borderLeftWidth:4,
	    paddingLeft:6,
	    borderLeftColor:"#06acf9",
	    marginTop:10,
	    marginLeft:10,
	    fontSize:16
	},
});