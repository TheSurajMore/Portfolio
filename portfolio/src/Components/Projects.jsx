import React from "react";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return(<>
  <Center>
  <Box width={'70%'} mb={'2%'} >
  <Box borderWidth={'5px'} >
      <Heading>Todo-CRUD, MERN Web App</Heading>
      <a href="https://github.com/TheSurajMore/MERN-Todo-CRUD" target={'_blank'} rel='noreferrer' ><Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open GitHub Link In New Tab <ExternalLinkIcon/> </Button></a>
    </Box>
    <Box borderWidth={'5px'} >
      <Heading>E-commerce, Frontend React Web App</Heading>
      <a href="https://surajecommerce.netlify.app/" target={'_blank'} rel='noreferrer' ><Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab <ExternalLinkIcon/> </Button></a>
    </Box>
    <Box borderWidth={'5px'} >
      <Box>⦿ Technologies used in above Projects are HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Mongoose, and some tools and libraries.  </Box>
    </Box>
  </Box>
  </Center>
  </>)
}
export default Projects;