import {httpHandle} from '@/http/http'


// 抢单响应
export const PreemptHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/responseWbForApp",
        method:'post',
        payload:params.payload,
    })
}