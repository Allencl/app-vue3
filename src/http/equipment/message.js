import {httpHandle} from '@/http/http'

/**
 * 设备维修 维修信息查询
*/


// 详情查看
export const CheckDetailHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepairHistory",
        method:'get',
        url_RESTful:params.url_RESTful,

    })
}



// 维修经验 提交
export const SaveHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepairHistory",
        method:'put',
        payload:params.payload,
    })
}