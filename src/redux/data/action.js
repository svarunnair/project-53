import axios from "axios"

export const POST_DATA_REQUEST="POST_DATA_REQUEST"
export const POST_DATA_SUCCESS="POST_DATA_SUCCESS"
export const POST_DATA_FAILURE="POST_DATA_FAILURE"

export const GET_DATA_REQUEST="GET_DATA_REQUEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const PATCH_DATA_REQUEST="PATCH_DATA_REQUEST"
export const PATCH_DATA_SUCCESS="PATCH_DATA_SUCCESS"
export const PATCH_DATA_FAILURE="PATCH_DATA_FAILURE"

export const DELETE_DATA_REQUEST="DELETE_DATA_REQUEST"
export const DELETE_DATA_SUCCESS="DELETE_DATA_SUCCESS"
export const DELETE_DATA_FAILURE="DELETE_DATA_FAILURE"

export const GET_PARAMS_REQUEST="GET_PARAMS_REQUEST"
export const GET_PARAMS_SUCCESS="GET_PARAMS_SUCCESS"
export const GET_PARAMS_FAILURE="GET_PARAMS_FAILURE"


const postDataRequest=()=>{
    return({
        type:POST_DATA_REQUEST
    })
}
const postDataSuccess=(data)=>{
    return({
        type:POST_DATA_SUCCESS,
        payload:data
    })
}
const postDataFailure=()=>{
    return({
        type:POST_DATA_FAILURE,

    })
}


const patchDataRequest=()=>{
    return({
        type:PATCH_DATA_REQUEST
    })
}
const patchDataSuccess=(data)=>{
    return({
        type:PATCH_DATA_SUCCESS,
        payload:data
    })
}
const patchDataFailure=()=>{
    return({
        type:PATCH_DATA_FAILURE,

    })
}

const getDataRequest=()=>{
    return({
        type:GET_DATA_REQUEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
const getDataFailure=()=>{
    return({
        type:GET_DATA_FAILURE,

    })
}

const deleteDataRequest=()=>{
    return({
        type:DELETE_DATA_REQUEST
    })
}
const deleteDataSuccess=(data)=>{
    return({
        type:DELETE_DATA_SUCCESS,
        payload:data
    })
}
const deleteDataFailure=()=>{
    return({
        type:DELETE_DATA_FAILURE,

    })
}

const getParamsRequest=()=>{
    return({
        type:GET_PARAMS_REQUEST
    })
}
const getParamsSuccess=(data)=>{
    return({
        type:GET_PARAMS_SUCCESS,
        payload:data
    })
}
const getParamsFailure=()=>{
    return({
        type:GET_PARAMS_FAILURE,

    })
}


export const postData=(data)=>(dispatch)=>{
    console.log("nnnnnnnnnnnnnnnn",data)
    dispatch(postDataRequest())
    return axios({
        url:"http://localhost:2000/signup/data",
        method:'POST',
        data
    })
    .then((res)=>{
        console.log("Resssss",res)
        dispatch(postDataSuccess(res.data))
        console.log("res.data.post/....",res.data)
    })
    .catch((err)=>{
        dispatch(postDataFailure(err))
    })
}


export const getData=()=>(dispatch)=>{
    dispatch(getDataRequest())
    return axios({
        url:"http://localhost:2000/signup/data",
        method:'GET',

    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("res.get",res.data)
    })
    .catch((err)=>{
        dispatch(getDataFailure(err))
    })
}

export const patchData=(data,id)=>(dispatch)=>{
    dispatch(patchDataRequest())
    return axios({
        url:`http://localhost:2000/signup/${id}`,
        method:'PATCH',
        data
    })
    .then((res)=>{
        dispatch(patchDataSuccess(res.data))
        console.log("res.data.post/....",res.data)
    })
    .catch((err)=>{
        dispatch(patchDataFailure(err))
    })
}

export const deleteData=(id)=>(dispatch)=>{
    dispatch(deleteDataRequest())
    return axios({
        url:`http://localhost:2000/signup/${id}`,
        method:'DELETE',
        
    })
    .then((res)=>{
        dispatch(deleteDataSuccess(res.data))
        console.log("res.data.post/....",res.data)
    })
    .catch((err)=>{
        dispatch(deleteDataFailure(err))
    })
}


export const getParams=(id)=>(dispatch)=>{
    dispatch(getParamsRequest())
    return axios({
        url:`http://localhost:2000/signup/data/${id}`,
        method:'GET',
    })
    .then((res)=>{
        dispatch(getParamsSuccess(res.data))
        console.log("paramsDataa",res.data)
    })
    .catch((err)=>{
        dispatch(getParamsFailure(err))
    })
}