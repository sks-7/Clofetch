import React, { useEffect } from 'react'
import "../Utils/ShopStructure.css"
import {Box,Container,Flex,Heading,Select,Stack,Skeleton,Alert,AlertIcon,AlertDescription} from "@chakra-ui/react"
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/AppReducer/action'
import CosmeticsData from './CosmeticsData'
// import FilterSort from './FilterSort'
import FilterBox from './FilterBox'
import Navbar from './Navbar/Navbar'
import { FooterContainer } from '../Pages/Footer/containers/footer'
import { getSortData } from '../redux/AppReducer/action'
import { getmenData,getwomenData } from '../redux/AppReducer/action'

const ShopStructure = () => {
  
  const dispatch=useDispatch()
  const isLoading= useSelector((state)=>state.AppReducer.isLoading)
  const isError= useSelector((state)=>state.AppReducer.isError)
  console.log(isLoading)  

useEffect(()=>{
  dispatch(getData())
},[])



const handleActiveSort=(e)=>{
 const activeSort=e.target.value
  dispatch(getSortData(activeSort))
}

const handleGenderSort=(e)=>{
  const gender=e.target.value
  if(gender==="male"){
    dispatch(getmenData())
  }else{
    dispatch(getwomenData())
  }
}

  return (
    <div border='2px solid red' width='100%'>
      <Navbar/>
      <Flex width="30%" marginLeft="68%" justifyContent="space-between" gap='5px'>
      <Select onChange={handleActiveSort} placeholder='Sort By'>
                    <option value='asc'>Low To High</option>
                    <option value='desc'>High To Low</option>
      </Select>
      <Select onChange={handleGenderSort} placeholder='Filter By'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
      </Select>

      </Flex>
{
  isLoading  && 
  <Stack my={20}>
<Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  <Skeleton height="40px"/>
  </Stack>
}

{
  isError && 
  <Container
    width={{
      base:"full",
      sm:"full",
      md:"container.xl",
      lg:"container.lg",
      
    }}
      centerContent={true}
>
<Alert 
status="error"
py={{base:4,sm:4,md:4,lg:6}}
my={{base:24,sm:24,md:28,lg:40}}
px={{base:1,sm:1,md:4,lg:6}}
>
  <AlertIcon/>
  <AlertDescription>
    Something went Wrong ,please refresh
  </AlertDescription>
</Alert>
    </Container>

}

      <Flex>
        {/* <Box width='20%'> */}
        <FilterWrapper>
        <h2> <b>Filters</b></h2>
            <div>
      <FilterBox categorys={"Category"} value1={"shoes"} value2={'skirts'} value3={'trouser'}
      value4={"suits"}/>
      <FilterBox categorys={"Brand"}/>
      <FilterBox categorys={"Size"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Color"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Discount"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Price"} value1={"brand"} value2={''} value3={''}/>
      <FilterBox categorys={"Conscious"} value1={"brand"} value2={''} value3={''}/>
    </div>
            {/* <FilterSort/> */}
        </FilterWrapper>
        <ProductsWrapper>
            <CosmeticsData />
        </ProductsWrapper>
      </Flex>
      <FooterContainer/>
    </div>
  )
}

const FilterWrapper = styled.div`
  width: 20%;
  height: 600px;
  margin-top:70px;  
  // margin=left:10px;
  margin-left: 20px;
  position:fixed; 
`;

const ProductsWrapper = styled.div`
  width:100%;
  margin-left:22%;
  postition:relative;
  margin-top:'30px'
`;

export default ShopStructure
