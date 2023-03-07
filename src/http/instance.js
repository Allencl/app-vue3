import axios from 'axios'

import router from '@/router/index'
import store from '@/store/index'

import { showSuccessToast,showFailToast } from 'vant'


//让ajax携带cookie
axios.defaults.withCredentials = true


// base url
// axios.defaults.baseURL=process.env.VUE_APP_SERVER_API_BASE
// axios.defaults.baseURL="http://192.168.0.113:8188/"
axios.defaults.baseURL= process.env.NODE_ENV=="development"? "":"http://192.168.0.113:8188/"




const instance = axios.create()


// 请求拦截
instance.interceptors.request.use(
    (config) => {
        // 1. 这个位置就请求前最后的配置
        // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
        // config.headers['webClient'] = 1 // 后台要的
        // 利用cancelToken 取消当次请求
        // config.cancelToken = new axios.CancelToken(e => {
        //   // 在这里阻止重复请求，上个请求未完成时，相同的请求不会再次执行
        //   requestList.has(config.url)
        //     ? e(`${location.host}${config.url}---重复请求被中断`)
        //     : requestList.add(config.url)
        // })


        // console.log(111)
        store.dispatch("changeGlobalLodding",true) // 全局lodding

        return config;
    },
    (error) => {
        // return Promise.reject(error)
    }
)

// 响应拦截
instance.interceptors.response.use(
    (response)=>{
        const {config,data,status}=response;
        store.dispatch("changeGlobalLodding",false) // 全局lodding

        // console.log(response)  
        // 登录超时
        if(status==401){
            showFailToast("登录已超时，请重新登录！")
            // router.push('/login')
            return undefined
        }

        // 请求成功
        if (response.status == 200) {
            return data
            // if( ["post","get"].includes(String(config["method"])) ){
            //     return data
            // }else{
            //     return undefined
            // }
        }else{
            return undefined
        }
    },
    (error)=>{
        const {status}=error.response
        
        // 登录过期
        if(status==401){
            showFailToast("登录已超时，请重新登录！")
            router.push('/login')
        }
        // console.log(error.response)
        // const {statusText,status,data={}}=error.response;
        // message.error(`服务器错误：[${status}] ${statusText} ${data.message}`);
        // store.dispatch("changeSpinning",false) // 全局lodding

        store.dispatch("changeGlobalLodding",false) // 全局lodding
    }
)



export default instance