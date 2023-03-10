import instance from '@/http/instance'

import store from '@/store/index'
import { showSuccessToast,showFailToast } from 'vant'



// post 请求
export const httpHandle = async(option={})=>{
    // const {access_token}=store.state.actionsStore.bufferLoginMessage
    // console.log(access_token)
    const access_token=localStorage.getItem("_token")

    try {

        if(!access_token && !option["noToken"]){
            showFailToast("Token失效！")
            return new Promise((resolve, reject) => {})
        }

        // 格式化 url
        const _bufferParmasURL=Object.entries((option["url_params"]||{}));
        let _parmasURL="";  
        let _paramsRESTful=option["url_RESTful"]||"";

        // 格式化 url
        if(_bufferParmasURL.length){
            _bufferParmasURL.map(o=>{ _parmasURL+=`${o[0]}=${o[1]}&` });
            _parmasURL=`?${_parmasURL.slice(0,_parmasURL.length-1)}`
        }


        return new Promise((resolve, reject) => {
            instance({
                method: option["method"],
                url:option["url"]+_paramsRESTful+_parmasURL,
                data: option.formData ? option["payload"]: JSON.stringify( (option["payload"]||{}) ), 
                headers: option.formData ?
                    {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', // 表单提交
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': 'Bearer '+access_token
                    }
                    :
                    {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': 'Bearer '+access_token
                    },


            })
            .then((res)=>{
                // console.log(res)

                if(!res){
                    return
                }

                if(res?.code==500){
                    // reject(res)
                    showFailToast(`[${res.code}] ${res.msg}`);
                    return
                }

                if (res){
                    resolve(res)
                }
              })
            .catch((error) => {
                reject(error)
            })
        })        
    } catch (error) {
        // console.error(error);
    }

}