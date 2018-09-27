import api from "../config/config"

export default class HttpUtils {

    constructor() {
        this.header = {
            header: {
                "Appkey": "BpLnfgDs",
                "Authorization": "Bearer 29145|TYo26nhoqk0jWHlWUGtCKXov48KiQXkV6Ksh53kQxtOvASkAnskQvyciYPbemcDRdO9jCnVsxkTBlP8YGgdFLQ==",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "credientials": 'include'
            },
        }
    }
    static get(url, params) {
        if (params) {
            let paramsArray = []; //拼接参数            
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return new Promise((resolve, reject) => {
            fetch(
                    url, {
                        method: "GET",
                        headers: this.header,
                    })
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
    static post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: this.header,
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
}

export const cmnProductList = (params) => HttpUtils.get(api.home.productList, params)
export const cmnBannerList = (params) => HttpUtils.get(api.home.bannerList, params)
export const categoryList = (params) => HttpUtils.get(api.earn.categoryList, params)
export const videoList = (params) => HttpUtils.get(api.study.videoList, params)