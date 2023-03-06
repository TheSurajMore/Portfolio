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
      <Box>⦿ Technologies used:- React, Redux, JavaScript, CSS, HTML, Responsive UI, react-router-dom, Libraries. </Box>
      <Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab<ExternalLinkIcon/> </Button>
    </Box>
    <Box borderWidth={'5px'} mt={'1%'} >
      <Heading>YOUTUBE CLONE</Heading>
      <Box>⦿ React Web App</Box>
      <Box>⦿ Solo Project</Box>
      <Box>⦿ Technologies used:- React, Redux, JavaScript, CSS, HTML, Responsive UI, react-router-dom, Libraries.  </Box>
      <Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab<ExternalLinkIcon/> </Button>
    </Box>
    <Box borderWidth={'5px'} mt={'1%'} >
      <Heading>MY TODO</Heading>
      <Box>⦿ React Web App</Box>
      <Box>⦿ Solo Project</Box>
      <Box>⦿ Technologies used:- React, Redux, JavaScript, CSS, HTML, Responsive UI, react-router-dom, Libraries.  </Box>
      <Button mb={'1%'} mt={'1%'} colorScheme='blue'>Open Live Project In New Tab<ExternalLinkIcon/> </Button>
    </Box>
  </Box>
  </Center>
  </>)
}
export default Projects;