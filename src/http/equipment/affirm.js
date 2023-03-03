import {httpHandle} from '@/http/http'

/**
 * 设备维修 设备确认
*/



// 确认维修结束  
export const OverHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/proConfirmWbForApp",
        method:'post',
        payload:params.payload,
    })
}