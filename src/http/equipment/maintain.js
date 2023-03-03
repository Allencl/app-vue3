import {httpHandle} from '@/http/http'

/**
 * 设备维修 设备维修
*/

// 抢单响应
export const PreemptHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/responseWbForApp",
        method:'post',
        payload:params.payload,
    })
}


// 确认维修
export const AffirmHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/repConfirmWbForApp",
        method:'post',
        payload:params.payload,
    })
}


// 取消报修
export const CancelHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/cancelRepairWbForceForApp",
        method:'post',
        payload:params.payload,
    })
}


// 维修经验 详情查看
export const ExperienceDetailHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepairHistory",
        method:'get',
        url_RESTful:params.url_RESTful,
    })
}


// 保存维修经验
export const SaveHistoryHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepairHistory",
        method:'post',
        payload:params.payload,
    })
}

