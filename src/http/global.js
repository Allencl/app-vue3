import {httpHandle} from '@/http/http'


// table 列表
export const TableHTTP= async(params)=>{
    return await httpHandle({
        url:params.url,
        method:'get',
        url_params:params?.url_params,
    })
}