import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  Input,
  Container,
  FormLabel,
  Button,
  Tr,
  Td,
  Text,
  Image,
  useStatStyles,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { FooterContainer } from './Footer/containers/footer';

const Payment = () => {
  const [length, setLength] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [moblie, setMoblie] = useState('');

  const summary = JSON.parse(localStorage.getItem('CartDatas'));

  var data1 = JSON.parse(localStorage.getItem('address1')) || [];

  var AddressData = [];

  const handalAdd = () => {
    const payload = {
      name,
      moblie,
      pincode,
      address,
      country,
      city,
    };

    AddressData.push(payload);

    localStorage.setItem('address1', JSON.stringify(AddressData));
    window.location.reload();
  };

  return (
    <Box>
      <Navbar />
      <Flex gap="15%">
        <Box
          width="50%"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          m="5"
          p="5"
        >
          <Container>
            <Heading
              as="h2"
              size="sm"
              p="5"
              mb="5"
              textAlign="center"
              boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            >
              Add Your Dilvery Address
            </Heading>
            <Flex>
              <Container>
                <FormLabel>First Name*</FormLabel>
                <Input
                  type="text"
                  m="10px"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </Container>
              <Container>
                <FormLabel>Last Name</FormLabel>
                <Input m="10px" placeholder="Last Name"></Input>
              </Container>
            </Flex>
            <FormLabel>Country*</FormLabel>
            <Input
              m="10px"
              placeholder="country Name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Input>

            <FormLabel>Address*</FormLabel>
            <Input
              m="10px"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Input>

            <Flex>
              <Container>
                <FormLabel>City*</FormLabel>
                <Input
                  m="10px"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></Input>
              </Container>
              <Container>
                <FormLabel>State*</FormLabel>
                <Input m="10px" placeholder="First Name"></Input>
              </Container>
            </Flex>
            <Flex>
              <Container>
                <FormLabel>Zip Code*</FormLabel>
                <Input
                  type="text"
                  m="10px"
                  placeholder="Zip Code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                ></Input>
              </Container>
              <Container>
                <FormLabel>Phone</FormLabel>
                <Input
                  m="10px"
                  placeholder="Moblie"
                  value={moblie}
                  onChange={(e) => setMoblie(e.target.value)}
                ></Input>
              </Container>
            </Flex>
            <Button
              display={'block'}
              margin={'auto'}
              mt="10px"
              p="10px 60px"
              bg={'blue'}
              color="white"
              onClick={handalAdd}
            >
              Add
            </Button>
          </Container>
        </Box>
        <Box
          width="350px"
          height="100%"
          mt="20px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        >
          <Heading as="h3" size="md" textAlign="center">
            Summary
          </Heading>
          {summary.map((Item) => (
            <Box
              key={Item.id}
              display="flex"
              justifyContent="space-around"
              m="5px"
            >
              <div>
                <Image src={Item.image} w={10}></Image>
                <Text fontSize={{ base: 'xs', md: 'md' }}>
                  {Item.productName}
                </Text>
              </div>
              <div>
                <Text pt={1} fontSize={{ base: 'xs', md: 'md' }}>
                  {' '}
                  <b> ${Item.price}</b>
                </Text>
              </div>
            </Box>
          ))}
          <hr />
          <Flex justifyContent="space-around" pt={2}>
            <Box>Total:</Box>
            <Box>
              <b>${Math.round(summary.reduce((a, c) => a + c.price, 0))}</b>
            </Box>
          </Flex>
          <Box>
            <Link to="/paymentpage2">
              <Button mt="5%" ml="50px" mb={4}>
                Save and Continue
              </Button>
            </Link>
          </Box>
        </Box>

        <Box h="300px"  width="30%" mr="30px" boxShadow={"2xl"}>
          <Text fontSize={'20px'} textAlign={'center'}>
            User Address
          </Text>

          {data1.map((ele, ind) => (
            <div key={ele.ind}>
              <Text textAlign={"center"}>{ele.name}</Text>
              <Text textAlign={"center"}>{ele.country}</Text>
              <Text textAlign={"center"}>{ele.city}</Text>
              <Text textAlign={"center"}>{ele.address}</Text>
              <Text textAlign={"center"}>{ele.pincode}</Text>
              <Text textAlign={"center"}>{ele.moblie}</Text>
            </div>
          ))}
        </Box>
      </Flex>

      <FooterContainer />
    </Box>
  );
};

export default Payment;
