import React from 'react'
import { Flex,Box,Text,Image,Icon } from '@chakra-ui/react'

const HelpContent = () => {
    const Brands = [
        {
            id: 1,
            
            icon:"data:image/png;base64,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",
            text1:"HOW TO SHOP",
            text2:"Your guide to shopping and placing orders"
           
          },
          {
            id: 2,
            
            icon:"data:image/png;base64,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",
            text1:"FAQS",
            text2:"Your questions answered"
           
           
            
          },
          {
            id: 3,
            icon:"data:image/png;base64,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",
            text1:"NEED HELP",
            text2:"Contact our global Customer Service team"
           
            
          },
        ]
  return (
   <>
     <Flex  gap='29px' maxW='100%' direction={['column','column','row']}>
            {Brands.map(({id,icon,text1,text2})=>(
         <Box key={id}  border='1px'borderColor='gray.200'
         h='150px' w='500px'
         p='15'
         
         lineHeight='2'
         >
         <Image boxSize='20%' maxW="25px"
         src={icon}
         
         />
         <Text  align='left'
         pt='4'
         
         >{text1}</Text>
         <Text align='left'>{text2}</Text>
         
         </Box>
    ))}
      
        </Flex>
   </>
  )
            }


export default HelpContent