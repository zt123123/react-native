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

	},
	study:{

	},
	mine:{

	},
	login:{
		login:"/v1/cmn/biz/channel/login"
	}
}