import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Center, Divider, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
    return(<>
    <Center>
    <Box width={'70%'} borderWidth={'5px'} padding={'5%'} >
    <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500'/> 2022 - 2023 Training / Learning Experience
  </ListItem>
    <ListItem>
        <Divider m={'1%'} />
        <Text>1) Personal projects mentioned in projects.</Text>
        <Text> 2) Personal group projects using git and GitHub. </Text> 
         <Text> 3) I accomplished a lot of front-end web development tasks during my one year of learning to solidify my understanding.</Text>
  </ListItem>
</List>
</Box>
</Center>
    </>)
}

export default Experience;