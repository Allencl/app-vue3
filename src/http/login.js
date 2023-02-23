import {httpHandle} from '@/http/http'


// 检验码
export const codeHTTP= async(params)=>{
    // console.log( params )
    return await httpHandle({
        url:"/stage-api/code",
        method:'get',
    })
}

// 登录
export const loginHTTP= async(params)=>{
    // console.log( params )
    return await httpHandle({
        url:"/stage-api/auth/login",
        method:'post',
        payload:params.payload
    })
}