import * as types from "./actionType"

const initState={
    products:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,action)=>{
        const {type,payload}=action
    switch(type){
        case types.GET_DATA_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false
      }
    case types.GET_DATA_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        products:payload
      }
    case types.GET_DATA_FAILURE:{
      return{
        ...state,
        isLoading:false,
        isError:true
      }
    }
      default:
        return state;
  }
};


