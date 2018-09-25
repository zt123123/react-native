import api from "../config/config"

export default class HttpUtils{

	constructor() {
	    this.header = {
	        method: "POST",
	        header: {
	        	"Appkey": "BpLnfgDs",
	        	"Authorization": "Bearer 29145|TYo26nhoqk0jWHlWUGtCKXov48KiQXkV6Ksh53kQxtOvASkAnskQvyciYPbemcDRdO9jCnVsxkTBlP8YGgdFLQ==",
	            "Accept": "application/json",
	            "Content-Type": "application/json",
	        },
	        body: JSON.stringify(data)
	    }
	}
	static get(url){
		return new Promise((resolve,reject)=>{
			fetch(url,this.header)
				.then(response=>response.json())
				.then(result=>resolve(result))
				.catch(error=>reject(error))
		})
	}
	static post(url,data){
		return new Promise((resolve,reject)=>{
			fetch(url,this.header)
				.then(response=>response.json())
				.then(result=>resolve(result))
				.catch(error=>reject(error))
		})
	}
}

export const cmnProductList=(params)=>HttpUtils.get(api.home.productList,params)