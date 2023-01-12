import { useEffect, useState } from 'react'
import {
    Button,
    TabPanel,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox,
    Flex,
    Link,
    Text,
  } from '@chakra-ui/react'
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons"
// import { onAuthStateChanged } from "firebase/auth";
// import {auth} from "../../firebase-config"
import { useDispatch, useSelector } from 'react-redux'
import { signAuth } from '../../redux/Auth/action';

const SignUp = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const dispatch=useDispatch()



      
    const register=()=>{
        dispatch(signAuth(email,pass))
            setEmail("");
            setPass("");
            setName("")
    }
  
  return (
    <>
        <TabPanel>
            <label>Name </label>
            <Input placeholder='Enter name'  mb="10px" mt="5px" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label>Email address</label>
            <Input placeholder='Enter email'  mb="10px" mt="5px" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password</label>
            <InputGroup mt="5px" size='md'>
                <Input
                border="1px solid grey"
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? <ViewOffIcon/> : <ViewIcon/>  }
                </Button>
            </InputRightElement>
            </InputGroup>
                <Text fontSize="14px" mt="10px">By registering, you agree with our <Link>Terms & Conditions</Link>  and <Link>Privacy and Cookie Policy.</Link></Text>
                <Flex mt="10px" gap="10px" >
                    <Checkbox mb="35px" defaultChecked></Checkbox>
                    <Text fontSize="14px">Sign up for promotions, tailored new arrivals, stock updates and more. Unsubscribe at the bottom of our emails.<Link>Find out more</Link></Text>
                </Flex>
                <Button onClick={register} _hover={{bg:"rgb(65, 63, 63)"}} bg="black" color="white" mt="15px" w="100%">Register</Button>
                <Text textAlign="center" mt="10px" fontWeight="bold" >OR</Text>
                <Button mt="15px" bg="white" border="1px solid black"  w="100%">Continue With Google</Button>
                <Button mt="15px" bg="white" border="1px solid black"  w="100%">Continue With Apple</Button>
                <Button mt="15px" bg="white" border="1px solid black"  w="100%">Continue With Facebook</Button>
        </TabPanel>
      
    </>
  )
}

export default SignUp
