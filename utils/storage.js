import { AsyncStorage,ToastAndroid } from "react-native"


export default class StorageUtils{
	//保存数据
	static setData = async (key,value) => {
	  try {
	    const value=await AsyncStorage.setItem(key, value);
	    if (value !== null) {
	      Promise.resolve(value)
	    }
	  } catch (error) {
	  	Promise.reject(error)
	  }
	}

	//读取数据
	static getData = async (key) => {
	  try {
	    const value = await AsyncStorage.getItem(key);
	    if (value !== null) {
	      Promise.resolve(value)
	    }
	   } catch (error) {
	     Promise.reject(error)
	   }
	}

	//删除数据
	static removeData = async (key) => {
	  try {
	    const value = await AsyncStorage.removeItem(key);
	    if (value !== null) {
	      Promise.resolve(value)
	    }
	   } catch (error) {
	     Promise.reject(error)
	   }
	}

	//清空数据
	static clearData = async () => {
	  try {
	    const value = await AsyncStorage.clear();
	    if (value !== null) {
	      Promise.resolve(value)
	    }
	   } catch (error) {
	     Promise.reject(error)
	   }
	}
}

