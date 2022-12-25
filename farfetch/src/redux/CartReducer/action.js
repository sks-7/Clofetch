let data=[]

const addToCart=(payload)=>(dispatch)=>{
    data.push(payload)
    console.log(data)
    localStorage.setItem('CartDatas',JSON.stringify(data)) 
    // console.log("item added")
}

// const CartData=JSON.parse(localStorage.getItem("CartDatas")) 

// const removeToCart=(id,index)=>(dispatch)=>{
//     console.log(index)
//     const Data1=CartData.splice(index,1)
//     localStorage.setItem('CartData',JSON.stringify(Data1))
          
// }
// const checkoutCart=()=>{
//     return{
     
//     }
// }


// export const addToCart=(payload)=>(
//     {
//     type:'ADD_TO_CART',
//     payload
// })

// export const removeFromCart=(webID)=>({
//     type:"REMOVE_FROM_CART",
//     payload:webID
// })

// export const checkout=()=>({
//     type:"CHECKOUT"
// })



// export {addToCart,checkoutCart}