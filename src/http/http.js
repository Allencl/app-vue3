import instance from '@/http/instance'

import store from '@/store/index'
import { showSuccessToast,showFailToast } from 'vant'



// post 请求
export const httpHandle = async(option={})=>{
    const {access_token}=store.state.actionsStore.bufferLoginMessage

    try {

        return new Promise((resolve, reject) => {
            instance({
                method: option["method"],
                url: option["url"] || "",
                data:JSON.stringify( (option["payload"]||{}) ), 
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer '+access_token
                },
            })
            .then((res)=>{
                // console.log(res)

                if(res.code==500){
                    // reject(res)
                    showFailToast(`${res.code} ${res.msg}`);
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