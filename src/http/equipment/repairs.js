import {httpHandle} from '@/http/http'

/**
 * 设备维修 设备报修
*/


// 工厂 tree 
export const FactoryTreeHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/nodeLevel/list",
        method:'get',
    })
}

// 设备 tree 
export const EquipmentTreeHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipment/list",
        method:'get',
    })
}




// 故障类型 下拉 
export const FaultTypeHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/faultType/list?enabled=1",
        method:'get',
    })
}


// 故障位置 下拉 
export const FaultPositionHTTP= async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/fault/list?enabled=1",
        method:'get',
    })
}


// 维修类型 下拉 
export const MaintainTypeHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/system/dict/data/type/equipment_repair_type",
        method:'get',
    })
}



// 报修人 下拉 
export const RepairmanHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/userList?enabled=1",
        method:'post',
    })
}



// 报修 提交 
export const SubmitHTTP=async(params)=>{
    return await httpHandle({
        url:"/stage-api/iiot/equipmentRepair/confirmRepairWbForApp",
        method:'post',
        payload:params.payload,

    })
}