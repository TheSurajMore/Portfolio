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
        HTML5
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        CSS3
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        JavaScript (ES6+)
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        React
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Node.js 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Express.js        
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        MongoDB        
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Mongoose        
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Redux
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        TypeScript 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Tailwind 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        GitHub, Github actions 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        AWS 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Problem solver 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Capable of writing prompts to get ready-made code or to solve bugs. And able to use the internet, AI tools like ChatGPT to do tasks more efficiently 
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>
  <AccordionItem borderWidth={'medium'} >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' >
        Always ready to learn and use different technologies, librarise, and frameworks        
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    {/* <AccordionPanel pb={4}>
    </AccordionPanel> */}
  </AccordionItem>

</Accordion>
</Center>
    </>)
}

export default Skills;