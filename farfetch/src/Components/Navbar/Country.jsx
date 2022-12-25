import React from 'react'
import {Search2Icon} from "@chakra-ui/icons"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Avatar,
    Input,
    Flex,
    Box,
  } from '@chakra-ui/react'
import { useState } from 'react'

const Country = (props) => {
    const {countries}=props
    const [counName,setCounName]=useState("India")
    const [flag,setFlag]=useState("https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick=(flag,name)=>{
        setCounName(name);
        setFlag(flag)
    }
    
  return (
    <Box w="35px">
      <Button _hover={{bg:"white"}} bg="white"  onClick={onOpen}>
        <Avatar size="xs" src={flag} />
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent height="450px" >
          <ModalCloseButton />
          <ModalBody mt="40px">
            <Text fontWeight="600" textAlign="center">
                DELIVERY DESTINATION OR REGION
            </Text>
            <Text fontWeight="600" mt="20px" textAlign="center">
            {`You are currently shipping to ${counName} and your order will be billed in USD $.`}
            </Text>
            <Flex borderRadius="8px" p="8px" mt="40px" border="1px solid rgb(212, 209, 209)" alignItems="center">
                <Input  placeholder='Search for a destination or region' variant='unstyled'/>
                <Search2Icon ml="10px" />
            </Flex>
          </ModalBody>

          <ModalBody>
          <Box >
                {countries.map((ele)=>(
                    <Flex key={ele.name} _hover={{cursor:"pointer"}} onClick={()=>handleClick(ele.flag,ele.name)} mt="15px" alignItems="center" justifyContent="space-between">
                        <Flex gap="25px" >
                            <Avatar size="sm" src={ele.flag}/>
                            <Text>{ele.name}</Text>
                        </Flex>
                        <Box>
                            <Text textAlign="rigth" >{ele.iso3}</Text>
                        </Box>
                    </Flex>
                ))}
            </Box>
          </ModalBody>

        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Country
