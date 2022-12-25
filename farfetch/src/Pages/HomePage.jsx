import React from 'react'
import { Flex, Spacer,Box,Text,Button,Image, Heading,Badge,Icon, VStack } from '@chakra-ui/react'
import Boutiques from './Boutiques'
import CategoryGift from './CategoryGift'
import BrandCate from './BrandCate'
import HelpContent from './HelpContent'
import {Link} from "react-router-dom"
import HomeInput from './HomeInput'
import Navbar from '../Components/Navbar/Navbar'
import { FooterContainer } from './Footer/containers/footer'

const HomePage = () => {
   
        
  return (
    
    <>
     <Navbar/>
        
    <Flex color='black' w='90%' ml='20' mt='10' direction={['column','column','row']} >
        
        <Box w='50%'  >
        <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4017102/data/b271794d1e368cacbb73b7fdd1fb3251/1x1_messaging-side/637/data.jpeg' alt='Dan Abramov' w='100%'  />
        </Box>
    
        <Box w='50%' h='600px'  align='center'  >
            <Text fontSize={['xl','3xl','6xl']}pt='10'lineHeight='1.2' fontWeight='bold'>22% OFF YOUR <br/> NEW WARDROBE</Text>
            <br />
            <Text fontSize='lg'  >For a limited time only, you can shop the world's most <br/>
            iconic brands with 22% off.Offer available on selected <br/>
            full-price items</Text>
            <br/>
            <Link to = "/shop">
            <Button colorScheme='teal' variant='outline'>
                Shop Now
            </Button>   
            </Link> 
        </Box>
        
    </Flex>

    <Flex color='black' w='90%' ml='20' mt='10' direction={['column','column','row']} >
       
    
        <Box w='50%' h='600px' textAlign={['center','center','center']} mr='3' align='center' >
            <Text fontSize={['xl','3xl','4xl']}pt='20' lineHeight='1'>Party hearder: amped-up looks for every <br/>occasion</Text>
            <br />
            <Text fontSize='lg' >Time to throw out the partywear rule book: introducing high-impact knits,<br/>
            offbeat separates and unexpected suiting for the the freshest take on event<br/>dressing</Text>
            <br/>
            <Button colorScheme='teal' variant='outline'>
                Explore More
            </Button>  
              
        
        </Box>
        <Box w='50%'   >
        <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4031242/data/45e16e8da13efd90af974a6bf3e3c3d6/1x1_messaging-side/637/data.jpeg' alt='Dan Abramov' w='100%'  />
        </Box>
    </Flex>

    <Flex color='black' w='90%' ml='20' mt='10' gap='16px' direction={['column','column','row']}>
        <Box w='49%'   >
        <Image boxSize='500px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4031482/data/46ff3c7a489afe1661d7f5a19c6d7601/1x1_two-columns/637/data.jpeg' alt='Dan Abramov' w='100%'  />
        <Text fontSize='lg' align='flex-start' m='0' >75 STATEMENT SHIRTS</Text>
        <Text fontSize='lg' align='flex-start' >From Valentino's in-demand hot pink shade to Casablanca's iconic printed <br/>
        styles,these shirts are made to noticed this season</Text>
        </Box>
        
        <Box w='49%' h='600px'   >
        <Image boxSize='600px' src='https://cdn-images.farfetch-contents.com/18/98/13/19/18981319_41334424_1000.jpg' alt='Dan Abramov' w='100%'  />
              
        </Box>


    </Flex>

    <Flex  w='90%' ml='20' mt='10' direction={['column','column','row']}>
        <Box p='4' >
            <Text fontSize='lg'>New in: hand-picked daily from the world’s best brands and boutiques</Text>
        </Box>
        <Spacer />
        <Button colorScheme='teal' variant='outline'>
                Shop Now
        </Button>


    </Flex>

    <Flex  w='90%' ml='20' mt='10' mb='20' direction={['column','column','row']} >
        
        <Boutiques />

       
    </Flex>
    
    <Flex color='black' w='90%' ml='20' mt='40' direction={['column','column','row']} >
       
    
       <Box w='50%' h='600px'  align='center' >
           <Text fontSize='4xl'pt='20'lineHeight={1} fontWeight='bold'>THE TRIPLE<br/> STITCH SNEAKER</Text>
           <br />
           <Text fontSize='lg' >Shop Zegna</Text>
           <br/>
             
             
       
       </Box>
       <Box w='50%'   >
       <Image boxSize='600px' src='https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3954094/data/38be8fc7e035a1d343e9472e3b4f5836/3x4_messaging-side/936/data.jpeg'  />
       </Box>
   </Flex>
   <Text fontSize='3xl'pt='20'align={'center'}>Shop gifts by category</Text>
   <Flex  w='90%' ml='20' mt='10' mb='20'  >
  
        <CategoryGift />
       
    </Flex>

    <Flex  w='90%' ml='20' mt='10'>
        <Box p='4' >
            <Text fontSize='xl'>Trending now: most-wanted gifts</Text>
        </Box>
        <Spacer />
        <Button colorScheme='teal' variant='outline'>
                Shop Now
        </Button>


    </Flex>

    {/* <Text fontSize='6xl'pt='20'>Shop gifts by category</Text> */}
    
    <Flex  w='90%' ml='20' mt='10' >
        
        <Boutiques />

       
    </Flex>
   

    <Flex  w='90%' ml='20' mt='10'  >
        <Box p='4' w='100%'>
        <Text fontSize='5xl'pt='20'  align='center' >Shop gifts by brands</Text>
        </Box>
        


    </Flex>
   
    <Flex  w='90%' ml='20' mt='10' >
    
        <BrandCate />

       
    </Flex>

    <Flex  w='90%' ml='20' mt='20' >
        
        <HelpContent/>

       
    </Flex>

    <Flex  w='90%' ml='20' mt='20' mb='20' >
        
        <HomeInput/>

       
    </Flex>
   
        
    <FooterContainer />
       
    
       
    </>
    
  )
}

export default HomePage