import React from 'react'
import { Flex,Box,Text,Image,Icon } from '@chakra-ui/react'
// import Navbar from '../Components/Navbar/Navbar'

const Boutiques = () => {

    const Brands = [
        {
            id: 1,
            
            img: 'https://cdn-images.farfetch-contents.com/18/32/64/57/18326457_42274704_600.jpg',
            text1:"New Season",
            text2:"VETEMENTS",
            text3:"reversible hooded bomber jacket",
            price:"$3,714"
            
          },
          {
            id: 2,
            
            img: 'https://cdn-images.farfetch-contents.com/18/94/45/72/18944572_42200205_600.jpg',
            text1:"Conscious",
            text2:"Balenciage",
            text3:"x adidas Speed high-top sneakers",
            price:"$1,150"
            
          },
          {
            id: 3,
            
            img: 'https://cdn-images.farfetch-contents.com/19/21/45/96/19214596_42311424_600.jpg',
            text1:"New Season",
            text2:"AMBUSH",
            text3:"FLOCKED-SLOGAN ROLL-NECK JUMPER",
            price:"$655"
            
          },
          {
            id: 4,
            
            img: 'https://cdn-images.farfetch-contents.com/19/21/83/52/19218352_42138221_600.jpg',
            text1:"New Season",
            text2:"TAG Heuer",
            text3:"2022 uthworn Carrera 44mm",
            price:"$8,595"
            
          },
    ]

  return (
    <>
    {/* <Navbar/> */}
    <Flex  gap='16px'direction={['column','column','row']}>
    {Brands.map(({id,img,text1,text2,text3,price})=>(
         <Box key={id}  >
         <Image boxSize='100%' 
         src={img}
         />
         <Text>{text1}</Text>
         <Text fontWeight={'bold'}>{text2}</Text>
         <Text>{text3}</Text>
         <Text>{price}</Text>
         </Box>
    ))}
      
        </Flex>
    </>
  )
}

export default Boutiques