import axios from "axios"


export const POST_SIGNUP_REQUEST ="POST_SIGNUP_REQUEST"
export const POST_SIGNUP_SUCCESS ="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE ="POST_SIGNUP_FAILURE"

export const POST_LOGIN_REQUEST ="POST_LOGIN_REQUEST"
export const POST_LOGIN_SUCCESS ="POST_LOGIN_SUCCESS"
export const POST_LOGIN_FAILURE ="POST_LOGIN_FAILURE"

export const GET_SIGNUP_REQUEST ="GET_SIGNUP_REQUEST"
export const GET_SIGNUP_SUCCESS ="GET_SIGNUP_SUCCESS"
export const GET_SIGNUP_FAILURE ="GET_SIGNUP_FAILURE"

const PostSignupRequest=()=>{
    return({
        type:POST_SIGNUP_REQUEST,
    })
}
const PostSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const PostSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE,
    })
}

const getSignupRequest=()=>{
    return({
        type:GET_SIGNUP_REQUEST,
    })
}
const getSignupSuccess=(data)=>{
    return({
        type:GET_SIGNUP_SUCCESS,
        payload:data
    })
}
const getSignupFailure=()=>{
    return({
        type:GET_SIGNUP_FAILURE,
    })
}

const postLoginRequest=()=>{
    return({
        type:POST_LOGIN_REQUEST,
    })
}
const postLoginSuccess=(data)=>{
    return({
        type:POST_LOGIN_SUCCESS,
        payload:data
    })
}
const postLoginFailure=()=>{
    return({
        type:POST_LOGIN_FAILURE,
    })
}


export const postSignup=(data)=>(dispatch)=>{
    dispatch(PostSignupRequest())
    return axios({
        url:"https://interview-1-jgaq.onrender.com/signup",
        method:"POST",
        data
         })
        .then((res)=>{
            dispatch(PostSignupSuccess(res.data))
            console.log("res.signup",res.data)
        })
        .catch((err)=>{
            dispatch(PostSignupFailure(err))
        })
   
}


export const postLogin=(data)=>(dispatch)=>{
    dispatch(postLoginRequest())
    return axios({
        url:"https://interview-1-jgaq.onrender.com/signup/login",
        method:"POST",
        data
         })
        .then((res)=>{
            dispatch(postLoginSuccess(res.data))
            console.log("res.login",res.data.token)
        })
        .catch((err)=>{
            dispatch(postLoginFailure(err))
        })
   
}


export const getSignup=()=>(dispatch)=>{
    dispatch(getSignupRequest())
    return axios({
        url:"https://interview-1-jgaq.onrender.com/signup",
        method:"GET",
 
         })
        .then((res)=>{
            dispatch(getSignupSuccess(res.data))
            console.log("res.signupGET",res.data)
        })
        .catch((err)=>{
            dispatch(getSignupFailure(err))
        })
   
}