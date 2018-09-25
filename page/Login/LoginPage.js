import React, { Component } from 'react';
import {  View,Text,StyleSheet,Image,TextInput,Alert  } from 'react-native';
import { Akira,Jiro,Hoshi   } from 'react-native-textinput-effects';
import Button from 'react-native-button';

export default class LoginPage extends Component{
	constructor(props) {
	    super(props);
	    this.state = { text: '' };
	    this.onPressLearnMore=this.onPressLearnMore.bind(this)
	    this.getCode=this.getCode.bind(this)
	    this.login=this.login.bind(this)
	  }

	onPressLearnMore(){
		Alert.alert("123465")
	}
	getCode(){
		Alert.alert("获取验证码")
	}
	login(){
		Alert.alert("登陆")	
	}
	render(){
		const hoshiInput = (
		  <Hoshi
		    label={'请输入手机号'}
            maskColor={'#F9F7F6'}
            borderColor={'#7ac1ba'}
		  />
		);
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image style={styles.icon} source={require("../../img/icons/back.png")}/>
					<Text style={styles.txt}>密码登陆</Text>
				</View>
				<View style={styles.loginBox}>
					<View style={styles.loginTitle}>
						<Text style={styles.label}>Login</Text>
						<Text style={styles.codeLabel}>验证码登陆</Text>
					</View>
						
					<View style={styles.login}>
						{/**<TextInput 
							placeholder="请输入手机号"
						    placeholderTextColor="#ccc" 
							style={styles.username}
					        onChangeText={(text) => this.setState({text})}
					        value={this.state.text}
				        />**/}
				        {hoshiInput}
				        <View style={styles.codeWrapper}>
			        		{/**<TextInput  
			        			placeholder="输入验证码"
			        		    placeholderTextColor="#ccc" 
				        		style={styles.code}
				                onChangeText={(text) => this.setState({text})}
				                value={this.state.text}
			                />**/}
			                {hoshiInput}
							{/**<Button
							  onPress={this.getCode}
							  title="获取验证码"
							  color="#1296db"
							  accessibilityLabel="获取验证码"
							/>**/}
				        </View>
					</View>
			      	<Button
			      	    containerStyle={{
			      	    	padding:10, 
			      	    	height:45, 
			      	    	overflow:'hidden',
							borderRadius:4,
							elevation: 4,
							backgroundColor: '#1296db'
			      	  	}}
			      	    disabledContainerStyle={{backgroundColor: 'grey'}}
			      	    style={{fontSize: 20, color: '#fff'}}
			      	    onPress={this.login}>
			      	    登陆
			      	  </Button>
				</View>

				<View style={styles.loginTip}>
					<Text style={styles.tip}>新用户输入手机号登陆即可完成注册</Text>
					<Text>注册即同意<Text style={styles.agreement}>&lt;&lt;用户协议&gt;&gt;</Text></Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection:"column",
		flex:1,
		backgroundColor:"#fff"
	},
	header:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
	},
	codeLabel:{
		alignContent:"center",
		fontSize:20,
		marginTop:10,
		color:"#000",
		marginBottom:10
	},
	login:{
	},
	username:{
		height: 40,
		borderColor: 'gray',
		borderBottomColor:"#1296db",
		borderBottomWidth: 1
	},
	loginTitle:{
		alignItems:"center",
	},
	codeWrapper:{
		// flexDirection:"row",
		marginTop:20,
		marginBottom:20,
	},
	code:{
		height: 40,
		borderColor: 'gray',
		borderBottomColor:"#1296db",
		borderBottomWidth: 1,
		flex:1
	},
	label:{
		alignContent:"center",
		fontSize:30,
		fontStyle:"italic",
		color:"#1296db",
		marginTop:20
	},
	icon:{
		alignContent:"flex-start",
	},
	txt:{
		fontSize:18,
		color:"#1296db",
		marginRight:10,
		alignContent:"flex-end",
	},
	loginBox:{
		paddingLeft:20,
		paddingRight:20,
		marginBottom:20,
	},
	loginBtn:{
		
	},
	loginTip:{
		alignItems:"center",
	},
	tip:{
		marginTop:10,
		marginBottom:10
	},
	agreement:{
		color:"#1296db",
	}
});