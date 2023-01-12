import React, { useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Grid,
    GridItem,
    Image,
    Link,
  } from '@chakra-ui/react'

const NewIn = (props) => {
    const {name,img}=props


  return (
    <>
        <Menu>
            <MenuButton>
                {name}
            </MenuButton>
            <MenuList h="450px" >
                <Grid templateColumns='repeat(4, 1fr)'>
                        <GridItem>
                                <MenuItem>WHAT'S New</MenuItem>
                                <MenuItem>New in today</MenuItem>
                                <MenuItem>New: classic</MenuItem>
                                <MenuItem>New: cult style</MenuItem>
                                <MenuItem>New: hype streetwear</MenuItem>
                                <MenuItem>New: minimalism</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>TRENDING NOW</MenuItem>
                                <MenuItem>Chunky knitwear</MenuItem>
                                <MenuItem>90 most-wanted boots</MenuItem>
                                <MenuItem>New-season skiwear</MenuItem>
                                <MenuItem>The Browns Fashion edit</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>DISCOVER</MenuItem>
                                <MenuItem>Most-wanted pieces</MenuItem>
                                <MenuItem>The bestsellers</MenuItem>
                                <MenuItem>Conscious</MenuItem>
                                <MenuItem>The party edit</MenuItem>
                                <MenuItem>Fashion Icons</MenuItem>
                                <MenuItem>Best of the new season</MenuItem>
                                <MenuItem>Exclusives & collabs</MenuItem>
                        </GridItem> 
                        {/* <GridItem>
                                <MenuItem>THE HIGHLIGHTS</MenuItem>
                                <MenuItem>All articles</MenuItem>
                                <MenuItem>Street styles</MenuItem>
                                <MenuItem>How to</MenuItem>
                                <MenuItem>brands we love</MenuItem>
                                <MenuItem>Off-White</MenuItem>
                                <MenuItem>Plam Angels</MenuItem>
                                <MenuItem>Frragamo</MenuItem>
                                <MenuItem>Saint Laurent</MenuItem>
                        </GridItem>  */}
                        <GridItem>
                                <Image w="200px" src={img}/>
                                <MenuItem>Spotlight on</MenuItem>
                                <MenuItem>WATCHES & JEWELLERY</MenuItem>
                                <MenuItem><Link>Shop now</Link></MenuItem>
                        </GridItem> 
                </Grid>
            </MenuList>
        </Menu>
    </>
  )
}

export default NewIn
