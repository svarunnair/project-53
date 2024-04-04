import { GET_SIGNUP_FAILURE, GET_SIGNUP_REQUEST, GET_SIGNUP_SUCCESS, POST_LOGIN_FAILURE, POST_LOGIN_REQUEST, POST_LOGIN_SUCCESS, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUEST, POST_SIGNUP_SUCCESS } from "./authAction"


const initState={
    isError:false,
    isLoading:false,
    postSignup:[],
    postLogin:[],
    getSignup:[]

}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postSignup:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return ({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_LOGIN_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_LOGIN_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postLogin:action.payload
                })
                case POST_LOGIN_FAILURE:
                    return ({
                        ...state,
                        isError:true,
                        isLoading:false
                    })



                     case GET_SIGNUP_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getSignup:action.payload
                })
                case GET_SIGNUP_FAILURE:
                    return ({
                        ...state,
                        isError:true,
                        isLoading:false
                    })









                    default :
                    return({
                        ...state
                    })
    }
}