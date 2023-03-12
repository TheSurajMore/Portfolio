import React from "react";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Projects = () => {
  return(<>
  <Center>
  <Box width={'70%'} mb={'2%'} >
    <Box borderWidth={'5px'} >
      <Heading>E-COMMERCE</Heading>
      <Box>⦿ React Web App</Box>
      <Box>⦿ Solo Project</Box>
      <Box>⦿ Technologies used:- React, Context, JavaScript, CSS, HTML, Responsive UI, react-router-dom, Libraries. </Box>
      <a href="https://surajecommerce.netlify.app/" target={'_blank'} rel='noreferrer' ><Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab <ExternalLinkIcon/> </Button></a>
    </Box>
    <Box borderWidth={'5px'} mt={'1%'} >
      <Heading>MY TODO</Heading>
      <Box>⦿ React Web App</Box>
      <Box>⦿ Solo Project</Box>
      <Box>⦿ Technologies used:- React, Redux, JavaScript, CSS, HTML, Responsive UI, Libraries.  </Box>
      <a href="https://surajtodo.netlify.app/" target={'_blank'} rel='noreferrer' ><Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab <ExternalLinkIcon/> </Button></a>
    </Box>
    <Box borderWidth={'5px'} mt={'1%'} >
      <Heading>YOUTUBE CLONE</Heading>
      <Box>⦿ React Web App</Box>
      <Box>⦿ Solo Project</Box>
      <Box>⦿ Technologies used:- React, JavaScript, CSS, HTML, Responsive UI, Libraries.  </Box>
      <a href="https://clone-e822e.web.app/" target={'_blank'} rel='noreferrer' ><Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab <ExternalLinkIcon/> </Button></a>
    </Box>
  </Box>
  </Center>
  </>)
}
export default Projects;