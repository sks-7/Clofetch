import React from 'react'
import { Flex,Box,Text,Image,Icon } from '@chakra-ui/react'

const BrandCate = () => {
    


    const Brands = [
        {
            id: 1,
            
            img: 'https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994250/data/d3e4fad9935619d4ec115e26efee9777/3x4_three-columns/480/data.jpeg',
            text1:"CLASSIC GIFTS",
           
          },
          {
            id: 2,
            
            img: 'https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3982722/data/79e434c40461462c303e26b85707e95f/3x4_three-columns/480/data.jpeg',
            text1:"WATCHES & JEWELRY",
           
            
          },
          {
            id: 3,
            
            img: 'https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994310/data/a4643e0d498e0be675bff5e935602428/3x4_three-columns/480/data.jpeg',
            text1:"SMALL LEATHER GOODS",
            
            
          },
        ]
  return (
    <>
   
      <Flex  gap='16px' direction={['column','column','row']}>
        
            {Brands.map(({id,img,text1})=>(
         <Box key={id}  >
          
        
         <Image w='100%' 
         src={img}
         />
         <Text mt='3'>{text1}</Text>
         
         </Box>
    ))}
      
        </Flex></>
  )
}

export default BrandCate