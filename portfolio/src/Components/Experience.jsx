import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
    return(<>
    <Center>
    <Box width={'70%'} borderWidth={'5px'} padding={'5%'} >
    <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500'/> April 2023 - PRESENT => UpThink, Pune — Web Developer 
  </ListItem>
    <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500'/> 2022 - March 2023 => Web development learning with personal projects
  </ListItem>
</List>
</Box>
</Center>
    </>)
}

export default Experience;