import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_PARAMS_FAILURE, GET_PARAMS_REQUEST, GET_PARAMS_SUCCESS, PATCH_DATA_FAILURE, PATCH_DATA_REQUEST, PATCH_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./action"


const initState={
    isError:false,
    isLoading:false,
    postData:[],
    getData:[],
    patchData:[],
    deleteData:[],
    getParams:[]

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case POST_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postData:action.payload
                })
                case POST_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })



                    case GET_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getData:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case PATCH_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case PATCH_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    patchData:action.payload
                })
                case PATCH_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case DELETE_DATA_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case DELETE_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    deleteData:action.payload
                })
                case DELETE_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })

                    case GET_PARAMS_REQUEST:
            return({
                ...state,
                isError:false,
                isLoading:true,
            })
            case GET_PARAMS_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getParams:action.payload
                })
                case GET_PARAMS_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })




                    default:
                        return({
                            ...state
                        })

    }
}