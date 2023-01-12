import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignUp from "../Signup/SignUp";

const MobLogin = (props) => {
  const { name } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  let res;
  if (name == "Register") {
    res = 1;
  } else if (name == "Sign In") {
    res = 0;
  }

  return (
    <Box w="35x">
      <Button
        border="1px solid black"
        w="100%"
        mt="15px"
        _hover={{ bg: "white" }}
        onClick={onOpen}
        bg="white"
      >
        {name}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Come on in</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs mt="10px" defaultIndex={res}>
              <TabList>
                <Tab>SIGN IN</Tab>
                <Tab>I'M NEW HERE</Tab>
              </TabList>

              {/**************************************************************  Log In ***************************************/}

              <TabPanels>
                <TabPanel>
                  <label>Email address</label>
                  <Input placeholder="Enter email" mb="10px" mt="5px" />
                  <label>Password</label>
                  <InputGroup mt="5px" size="md">
                    <Input
                      border="1px solid grey"
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Flex mt="10px" gap="10px">
                    <Checkbox defaultChecked></Checkbox>
                    <label>
                      Keep me signed in. <Link>What's this?</Link>
                    </label>
                  </Flex>
                  <Flex mb="12px">
                    <Link mt="5px">Forgot your password?</Link>
                  </Flex>
                  <Button
                    _hover={{ bg: "rgb(65, 63, 63)" }}
                    bg="black"
                    color="white"
                    w="100%"
                  >
                    Sign In
                  </Button>
                  <Text textAlign="center" mt="10px" fontWeight="bold">
                    OR
                  </Text>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Google
                  </Button>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Apple
                  </Button>
                  <Button
                    mt="15px"
                    bg="white"
                    border="1px solid black"
                    w="100%"
                  >
                    Continue With Facebook
                  </Button>
                </TabPanel>

{/**************************************************************  Sign Up ***************************************/}

                <SignUp />
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default MobLogin;
