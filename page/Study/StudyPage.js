import React, { Component } from 'react';
import {  View ,Text,StyleSheet,Image} from 'react-native';

export default class DealPage extends Component<Props>{
	static navigationOptions = {
	        tabBarLabel: '学习',
	        tabBarIcon: ({focused}) => {
	            if (focused) {
	                return (
	                    <Image style={styles.tabBarIcon} source={require('../../img/icons/study_active.png')}/>
	                );
	            }
	            return (
	                <Image style={styles.tabBarIcon} source={require('../../img/icons/study.png')}/>
	            );
	        },
    };
	render(){
		return (
			<View>
				<Text>DealPage</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIcon: {
        width: 21,
        height: 21,
    }
});