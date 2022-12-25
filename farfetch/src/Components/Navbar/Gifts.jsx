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

const Gifts = (props) => {
    const {name,img}=props


  return (
    <>
        <Menu>
            <MenuButton>
                {name}
            </MenuButton>
            <MenuList >
                <Grid templateColumns='repeat(4, 1fr)'>
                        <GridItem>
                                <MenuItem>GIFTS BY STYLE</MenuItem>
                                <MenuItem>Ckassic</MenuItem>
                                <MenuItem>Cult</MenuItem>
                                <MenuItem>Minimalist</MenuItem>
                                <MenuItem>Streetwear</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>GIFTS BY CATEGORY</MenuItem>
                                <MenuItem>The season's most wanted</MenuItem>
                                <MenuItem>Gifts that do good</MenuItem>
                                <MenuItem>Small leathet goods</MenuItem>
                                <MenuItem>99 hype sneakers</MenuItem>
                                <MenuItem>Sweaths, knits & tees</MenuItem>
                                <MenuItem>The little things</MenuItem>
                                <MenuItem>Watches & jewellery</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <MenuItem>GIFTS BY DESGINER</MenuItem>
                                <MenuItem>Alexander McQueen</MenuItem>
                                <MenuItem>Balenciaga</MenuItem>
                                <MenuItem>Burberry</MenuItem>
                                <MenuItem>Gucci</MenuItem>
                                <MenuItem>Off-White</MenuItem>
                                <MenuItem>Plam Angels</MenuItem>
                                <MenuItem>Frragamo</MenuItem>
                                <MenuItem>Saint Laurent</MenuItem>
                        </GridItem> 
                        <GridItem>
                                <Image w="300px" src={img}/>
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

export default Gifts
