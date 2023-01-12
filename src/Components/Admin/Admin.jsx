import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
  } from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [data,setData]=useState([])
    const [isAuth,setIsAuth]=useState(false)
    const navigation=useNavigate()

    const handleEmail = (e) => setusername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
  
    const isEError = username === ''
    const isPError = password === ''


    const getAdminUsers=()=>{
        axios
          .get('https://data-base-0mrd.onrender.com/admin_users')
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(()=>{
        getAdminUsers()
    },[])

const handleSubmit=()=>{
    
    for (let i = 0; i < data.length; i++){
        let u = data[i].username;
        let p = data[i].password;
        if (u == username && p == password) {
            alert("Login Sucessfull!")
            navigation("/dashboard")
          }else{
            alert("Invaild Username or Password")
          }
    }
}

document.querySelector("body").style.backgroundColor="#f9fafb"


  return (
    <Box w="350px" m="auto" p="15px" mt="150px"  border="1px solid black" >
        <Box fontWeight="bold" fontSize="22px" textAlign="center">Admin</Box>
    <FormControl isInvalid={isEError}>
      <FormLabel>Email</FormLabel>
      <Input type='email' id="1" value={username} onChange={handleEmail} />
      {!isEError ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}

     <FormLabel>Password</FormLabel>
      <Input type='password' id="2" value={password} onChange={handlePassword} />
      {!isPError ? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}

      <Button onClick={handleSubmit} mt="15px" _hover={{ bg: "rgb(65, 63, 63)" }} w="100%" color="white"  bg="black">Log In</Button>
    </FormControl>
    </Box>
  )
}

export default Admin
