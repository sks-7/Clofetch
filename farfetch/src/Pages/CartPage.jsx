import React from 'react'
import {Box,TableContainer,Table,Thead,Tr,Th,Tbody,Td,Tfoot,Button,Container} from '@chakra-ui/react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import "../Utils/ShopStructure.css"
import { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { FooterContainer } from './Footer/containers/footer'

const CartPage = () => {
  const CartData=JSON.parse(localStorage.getItem("CartDatas")) 
  const [quan,setQuan]=useState('1')
  
  const dispatch=useDispatch()


  const removeToCart=(id,index)=>{
    let Cart=JSON.parse(localStorage.getItem("CartDatas"))
    let Data1=Cart.splice(index,1)
    localStorage.setItem('CartDatas',JSON.stringify(Cart))
    window.location.reload()  
  }

  return (
    <Box>
      <Navbar/>
      <TableContainer mt={{base:20,sm:20,md:28,lg:32}}>
        <Table 
        variant="simple"
        colorScheme="gray"
        size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}
        >
          <Thead>
            <Tr>
              <Th fontSize={{base:"xs",md:"md"}}>Product</Th>
              {/* <Th fontSize={{base:"xs",md:"md"}}>Quantity</Th> */}
              <Th fontSize={{base:"xs",md:"md"}}>Price</Th>
              <Th fontSize={{base:"xs",md:"md"}}>Remove from cart</Th>
            </Tr>
          </Thead>
          <Tbody>
            
            {
              CartData.map((Item,index)=>(
              <Tr key={Item.id}>
                <Td fontSize={{base:"xs",md:"md"}}>{Item.productName}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>${`${Math.round(Item.price * quan)}`}</Td>
                <Td fontSize={{base:"xs",md:"md"}}>
                  <Button onClick={()=>removeToCart(Item.id)} >Remove</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
            <Th fontSize={{base:"xs",md:"md"}}>Final Price</Th>
            <Th fontSize={{base:"xs",md:"md"}}>
              {Math.round(CartData.reduce((a,c)=>a+c.price,0))}
            </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Container>
        <Link to="/payment">
        <Button mb="50px" mt='10px'>Checkout</Button>
        </Link>
      </Container>
      <FooterContainer/>
    </Box>
  )
}

export default CartPage
