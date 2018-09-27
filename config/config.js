const DEV=true
const DEV_PREF="http://test.jubao56.com"
const PROD_PREFIX="https://www.jubao56.com"

const API_HOST=DEV?DEV_PREF:PROD_PREFIX

export default{
	home:{
		bannerList:API_HOST+"/v1/cmn/biz/banner/list",
		channelInfo:API_HOST+"/v1/cmn/biz/channel/info",
		productList:API_HOST+"/v1/cmn/service/product/list"
	},
	earn:{
		categoryList:API_HOST+"/v1/cmn/service/category/list"
	},
	study:{
		videoList:API_HOST+"/v1/cmn/biz/video/list"
	},
	mine:{
		messageList:API_HOST+"/v1/cmn/biz/message/list",
		statisticsAll:API_HOST+"/v1/cmn/biz/statistics/all",
		channelInfo:API_HOST+"/v1/cmn/biz/channel/info"
	},
	login:{
		login:API_HOST+"/v1/cmn/biz/channel/login"
	}
}