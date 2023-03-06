import { AccordionButton, AccordionIcon, Box, Accordion, AccordionItem, AccordionPanel, Center, } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
    return(<>
    <Center >
    <Accordion allowToggle mb={'2%'} >
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
          REACT
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>

  <AccordionItem borderWidth={'medium'}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          REDUX
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I am able to do state management globally using redux. I can manage state globally using context and prop drilling as well.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        JAVASCRIPT
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
      Lorem 
    </AccordionPanel> */}
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          CSS
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
      Lorem 
    </AccordionPanel> */}
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          HTML
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
      Lorem 
    </AccordionPanel> */}
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          GIT, GITHUB
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I am experienced  with version control systems Git and GitHub are commonly used by front-end developers 
    to collaborate with other developers and manage code versions. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        RESPONSIVE UI
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I am experienced with responsive design and have the ability to create responsive UI optimized for 
    various devices and screen sizes.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        REACT ROUTER DOM
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      I am experienced with React Router Dom is used to build single-page applications i.e. applications that 
      have many pages or components but the page is never refreshed instead the content is dynamically fetched 
      based on the URL.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        UNDERSTANDING USER EXPERIENCE (UX)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I am able to create user-friendly interfaces that are intuitive to navigate. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        LIBRARIES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I have expertise in utilizing various libraries to create excellent react web applications.  
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        PROBLEM SOLVING
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I am able to diagnose and troubleshoot issues that arise during the development process. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        COMMUNICATION AND COLLABORATION
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    As a front-end developer, I am able to work closely with designers and developers. 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        I AM A COMPLETE FRONT-END DEVELOPER
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
      Lorem 
    </AccordionPanel> */}
  </AccordionItem>
</Accordion>
</Center>
    </>)
}

export default Skills;