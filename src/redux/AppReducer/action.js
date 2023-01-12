import * as types from "./actionType"
import axios from 'axios'

const getDataRequest=()=>{
    return{
        type:types.GET_DATA_REQUEST
    }
}
const getDataSuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
const getDataFailure=()=>{
    return{
        type:types.GET_DATA_FAILURE
    }
}


// Data Fetching Here

const getData=(queryParams)=>(dispatch)=>{
    // console.log(queryParams)
         dispatch(getDataRequest())
return axios("https://data-base-0mrd.onrender.com/products",queryParams).then((r)=>{
        dispatch(getDataSuccess(r.data))
        // console.log(r.data)
    }).catch((e)=>{
        dispatch(getDataFailure())
        console.log(e)
    })
}

const getShoes=()=>(dispatch)=>{
 return axios("https://data-base-0mrd.onrender.com/products?type=shoes").then((r)=>{
    dispatch(getDataSuccess(r.data))
 })
}

const getTrouser=()=>(dispatch)=>{
    return axios("https://data-base-0mrd.onrender.com/products?type=shoes&type=trouser").then((r)=>{
       dispatch(getDataSuccess(r.data))
    })
   }

const getSortData=(activeSort)=>(dispatch)=>{
   return axios(`https://data-base-0mrd.onrender.com/products?_sort=price&_order=${activeSort}`).then((r)=>{
    dispatch(getDataSuccess(r.data))
   })
}
const getmenData=()=>(dispatch)=>{
    return axios("https://data-base-0mrd.onrender.com/menData").then((r)=>{
        dispatch(getDataSuccess(r.data))
    })
}

const getwomenData=()=>(dispatch)=>{
    return axios("https://data-base-0mrd.onrender.com/womenData").then((r)=>{
        dispatch(getDataSuccess(r.data))
    })
}


export {getDataRequest,getDataSuccess,getDataFailure,getData,getShoes,getTrouser,getSortData,getmenData,getwomenData}