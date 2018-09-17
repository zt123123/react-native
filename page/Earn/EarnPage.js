import React, { Component } from 'react';
import {  View ,Text,StyleSheet,Image} from 'react-native';

export default class TaskPage extends Component<Props>{
	static navigationOptions = {
	        tabBarLabel: '去挣钱',
	        tabBarIcon: ({focused}) => {
	            if (focused) {
	                return (
	                    <Image style={styles.tabBarIcon} source={require('../../img/icons/earn_active.png')}/>
	                );
	            }
	            return (
	                <Image style={styles.tabBarIcon} source={require('../../img/icons/earn.png')}/>
	            );
	        },
    };
	render(){
		return (
			<View>
				<Text>TaskPage</Text>
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
        width: 24,
        height: 24,
    }
});