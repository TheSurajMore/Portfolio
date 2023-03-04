import { Button, Grid, } from "@chakra-ui/react";
import React from "react";
import {useNavigate } from "react-router-dom";

const Menu = () => {
  const nav= useNavigate();
    return(<>
  <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'3%'} color={'white'} ml={'1%'} mr={'1%'} mb={'2%'} >
    <Button bg={'black'} onClick={()=>nav('/SKILLS')} >SKILLS</Button>
    <Button bg={'black'} onClick={()=>nav('/PROJECTS')} >PROJECTS</Button>
    <Button bg={'black'} onClick={()=>nav('/EDUCATION')} >EDUCATION</Button>
    <Button bg={'black'} onClick={()=>nav('/EXPERIENCE')} >EXPERIENCE</Button>
    <Button bg={'black'} onClick={()=>nav('/CONTACT')} >CONTACT</Button>
    <Button bg={'black'} onClick={()=>nav('/MY_SELF')} >MY SELF</Button>
  </Grid>
    </>)
}

export default Menu;