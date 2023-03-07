import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Center, List, ListIcon, ListItem, } from "@chakra-ui/react";
import React from "react";

const Experience = () => {
    return(<>
    <Center>
    <Box width={'70%'} borderWidth={'5px'} >
    <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    <ListItem>    Despite the fact that this will be my first job as a front-end developer, I want to emphasize that I have produced some excellent front-end projects, I accomplished a lot of front-end coding tasks during my one year of front-end development learning to solidify my understanding.</ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    <ListItem>    I have participated in three group projects as well and have experience using version control systems like Git in both team and solo projects. I have experience in communicating and collaborating with teammates.   </ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    <ListItem>    After almost a year of learning, I make sure I am prepared for the job before looking for it. I adapted a developer's mindset to turn any possibility into reality, either with my existing knowledge or learning new abilities.    </ListItem>
  </ListItem>
</List>
</Box>
</Center>
    </>)
}

export default Experience;