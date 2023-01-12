import React from 'react'
import { useState,useEffect } from 'react';
import { Checkbox,CheckboxGroup,Container,Box,Stack,Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { BiDownArrowAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { getShoes, getTrouser } from '../redux/AppReducer/action';


const FilterBox = (props) => {
    const  {categorys,value1,value2,value3,value4}=props
    const [height,setHeight]=useState(false)
    const [searchParams,setSearchParams]=useSearchParams();
    const [category,setCategory]=useState(searchParams.getAll('type')) || []
    const dispatch=useDispatch()
    // const [check,setCheck]=useState(false)


    const tooglebrand=()=>{
        if(!height){
            setHeight(true) 
        }else{
            setHeight(false)
        }
    }
      
    const handlefilter=(e)=>{
        const option=e.target.value
        let newCategory=[...category]
        // console.log(newCategory)
        if(newCategory.includes(option)){
          //Removing 
          newCategory.splice(newCategory.indexOf(option), 1)
        }else{
          //Adding
          newCategory.push(option)
        }
        setCategory(newCategory)
      }

      const handleShoes=()=>{
        dispatch(getShoes())
      }

      const handletrousers=()=>{
        dispatch(getTrouser())
      }

      useEffect(()=>{
        const params={}
        category && (params.type=category)
        setSearchParams(params)
      },[category,setSearchParams])
    

  return (
       <div style={{width:'100%'}}>
<BrandWrapper>
   <Flex onClick={tooglebrand} justifyContent='space-between'><Box >{categorys}</Box><BiDownArrowAlt/></Flex> 
    { height && 
    <Box borderTop='2px solid grey'>
        <Container>
            <CheckboxGroup >
            <Stack spacing={[1, 2]} direction={['column', 'column']}>
            <Checkbox defaultChecked={category.includes({value1})} style={{margin:"10px"}} 
            onChange={handleShoes}
            // onChange={(e) => setCheck(e.target.checked) }
            // isChecked={handleShoes}
            value={value1} 
            >{value1}</Checkbox>
            <Checkbox defaultChecked={category.includes({value2})} 
            value={value2} 
             onChange={handlefilter}
            style={{margin:"10px"}} >{value2}</Checkbox> 
            <Checkbox defaultChecked={category.includes({value3})} style={{margin:"10px"}} 
            value={value3} 
             onChange={handletrousers}
            >{value3}</Checkbox>  
            <Checkbox defaultChecked={category.includes({value4})} style={{margin:"10px"}} 
            value={value4} 
             onChange={handlefilter}
            >{value4}</Checkbox> 
            </Stack>
            </CheckboxGroup>    
        </Container>
    </Box>
    }
    </BrandWrapper>
    </div>
  )
}
const BrandWrapper=styled.div`
// border-bottom: 2px solid black;
font-size:18px;
// text-align:center;
margin:20px;
margin-left:10px;
width:80%;
`

export default FilterBox
