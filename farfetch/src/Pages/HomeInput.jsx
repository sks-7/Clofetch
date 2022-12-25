import React from 'react'
import { Radio, RadioGroup,Box,Checkbox,Input,Stack,InputGroup,InputLeftAddon,Button } from "@chakra-ui/react";

import { Text } from '@chakra-ui/react';


const HomeInput = () => {

  
  return (
    <>
    <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p="15px"  w='40%' m='auto' >
        <Box align ='center'>
    <Text fontSize='4xl'fontWeight='bold'lineHeight='1'>GET 10% OFF YOUR <br/> FIRST ORDER</Text><br/>
    <Text>Sign up for promotions, tailored new arrivals, stock <br/> updates  and more - straight to your inbox</Text><br/>
    <RadioGroup >
      <Radio >Womenswear</Radio>
      <Radio >Menswear</Radio>
      
    </RadioGroup>
    </Box>
    <Box   ml='45'  w='75%' mt='5' lineHeight='2' rowGap='10' columnGap='10' >
    <Text>GET UPDATES BY</Text>
    <Checkbox >Email</Checkbox><br/>
    <Input variant="outline" w='400px' placeholder="Your email address" mt='3'mb='5' /><br/>
    <Checkbox >SMS</Checkbox><br/>

    
  <InputGroup >
    <InputLeftAddon children="+91" mt='3'mb='5' />
    <Input type="tel" roundedLeft="0" w='340px' placeholder="phone number" mt='3'mb='5' />
  </InputGroup>

  
  <Button variantColor="white" bg='black'color='white' w='400px' align='center' mb='2'
 
  >Sign Up</Button>
 

  <Text fontSize='sm'lineHeight={1} align='center'>By signing up, you agree to our Privacy Policy. Unsubscribe anytime at the bottom of our emails.</Text>
  


</Box>


    </Box>

    </>
  )
}

export default HomeInput