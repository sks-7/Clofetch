import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase-config"
import * as types from "./actionType"


   const signAuth=(email,pass)=>async (dispatch)=>{
        try{
            const user= await createUserWithEmailAndPassword(auth,email,pass);
            // localStorage.setItem("signup",JSON.stringify(user))
            dispatch(({
                type:types.GET_SIGNUP_SUCCESS,
                payload:user
            }))
            alert("Account Created Successfully")
        }
        catch(err){
            dispatch(({
                type:types.GET_SIGNUP_FAILURE,
                payload:err.message
            }))
            alert(err.message)
        }
      }

      const LoginAuth=(email,pass)=>async (dispatch)=>{
        try{
            const user= await signInWithEmailAndPassword(auth,email,pass);
            // localStorage.setItem("login",JSON.stringify(user))
            dispatch(({
                type:types.GET_LOGIN_SUCCESS,
                payload: user
               
            }))

             
            alert("Login Sucessfull!")
        }
        catch(err){
            dispatch(({
                type:types.GET_LOGIN_FAILURE,
                payload:err.message
            }))
            alert(err.message)
        }
      }

    //   export const Signout = () => ({ type: AUTH_LOGOUT });
export {signAuth,LoginAuth}