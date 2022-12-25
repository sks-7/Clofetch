import React, { useState } from 'react'
import { Flex,Box,Heading,Input,FormLabel,Text,Image,Tr,Td,Center,Button,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter,Container } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useToast } from '@chakra-ui/react';
// import { Link } from 'react-router-dom'

const PaymentPage2 = () => {
  const [box1,setBox1]=useState(false)
  const {isOpen,onOpen,onClose}=useDisclosure()
  const cancelRef=React.useRef()
  const navigate = useNavigate()
  
  const toast = useToast();

  const tooglebox1=()=>{
   if(!box1){
    setBox1(true)
   }else{
    setBox1(false)
   }
  }

  const dat=[]
  const handleCheckout=()=>{
    onClose()
    // const checkout=()=>{
        localStorage.setItem("CartDatas",JSON.stringify(dat))
      // }
    toast({
      title: 'Oredr Placed .',
      description: "We've Placed  your order.Thanks for shopping and Support",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    
    navigate("/")
    

  }

  const cashPay=()=>{
    alert("Cash On Dilvery Selected")
   const el=document.getElementById("cashPayBtn")
   el.style.background="red"
   el.style.color="white"
  }

  const summary=JSON.parse(localStorage.getItem("CartDatas")) 
    console.log(summary)

  return (
    <Box>
      <Navbar/>
    <Flex gap='15%'>
        <Box width='50%' boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" m='5' p='5'>  
        <Container>
          <Box>
        <Heading size='md' m={2}>Choose Payment Methods</Heading>
         <Flex justifyContent='space-around' mb={5}>
         <Button onClick={tooglebox1} w={155} h={110}><Image src='https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png' w={100} h={100}></Image></Button>
         <Button onClick={tooglebox1} w={155} h={110}><Image src='https://w7.pngwing.com/pngs/924/607/png-transparent-mastercard-credit-card-business-debit-card-logo-mastercard-text-service-orange.png' w={100} h={100}></Image></Button>
         <Button onClick={tooglebox1} w={155} h={110}><Image src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/rupay-logo-icon.png' w={100} h={100}></Image></Button>
          </Flex> 
              <Button m={5} id="cashPayBtn" onClick={cashPay}>Cash On Dilvery</Button>
           
      { box1 &&
          <Box >
        <FormLabel>Card Number*</FormLabel>
            <Input m='10px'></Input>
            <Flex>
                <Container>
                <FormLabel> Name</FormLabel>
                <Input type="text" m='10px'></Input>
                </Container> 
                <Container>
                <FormLabel>CVV*</FormLabel>
                <Input m='10px' type='password'></Input>
                </Container>
                <Container>
                <FormLabel>Expiary Date*</FormLabel>
                <Input m='10px' type='date'></Input>
                </Container>
            </Flex> 
          </Box>
          }
          </Box>
      
 
        </Container>
        </Box>
        <Box width='350px' height='100%' mt='20px' boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
        <Heading as='h3' size='md' textAlign='center'>Summary</Heading> 
        {
          summary.map((Item)=>(
          <Box key={Item.id} display='flex' justifyContent='space-around' m='5px'>
            <div>
            <Image src={Item.image} w={10}></Image>
            <Text fontSize={{base:"xs",md:"md"}}>{Item.title}</Text>
            </div>
            <div>
            <Text pt={1} fontSize={{base:"xs",md:"md"}}> <b> ${Item.price}</b></Text>
            </div>
          </Box>
        ))}
        <hr />
        <Flex justifyContent='space-around' pt={2}>
            <Box>Total:</Box>
            <Box><b>${Math.round(summary.reduce((a,c)=>a+c.price,0))}</b></Box>
        </Flex>
        <Box>
            {/* <Link to="/paymentpage2"> */}
            <Button mt='5%' ml='110px' mb={4} onClick={onOpen}>Place Order</Button>
            {/* </Link> */}
        </Box>
        </Box>
    </Flex>
    <Center mt={{base:4,md:8}}>
        {/* <Button onClick={onOpen}>Place order</Button> */}
        <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg'>
                Place Order
              </AlertDialogHeader>
              <AlertDialogBody>
                Are you sure your want to place order
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
                <Button onClick={handleCheckout}>Yes</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
</Box>
  )
}

export default PaymentPage2
