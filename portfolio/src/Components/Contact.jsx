import React from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Center,
  Box,
  Text
} from '@chakra-ui/react'
import {FcPhoneAndroid} from 'react-icons/fc'
import {ImMail, ImLocation2} from 'react-icons/im'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Contact = () => {
  return(<>
  <Center>
  <Box>
  <TableContainer>
  <Table size='lg'>
    <Thead>
      <Tr>
        <Th><FcPhoneAndroid size={'30px'} /></Th>
        <Th>+91 9970070579</Th>
      </Tr>
      <Tr>
        <Th><a rel="noreferrer" target={'_blank'} href="mailto:surajmbusiness@gmail.com" ><ImMail size={'30px'} /></a></Th>
        <Th><a rel="noreferrer" target={'_blank'} href="mailto:surajmbusiness@gmail.com" >surajmbusiness@gmail.com</a></Th>
      </Tr>
      <Tr>
        <Th><a rel="noreferrer" target={'_blank'} href="https://www.linkedin.com/in/thesurajmore/" ><BsLinkedin size={'30px'} /></a></Th>
        <Th><a rel="noreferrer" target={'_blank'} href="https://www.linkedin.com/in/thesurajmore/" >Linkedin</a></Th>
      </Tr>
      <Tr>
        <Th><a rel="noreferrer" target={'_blank'} href="https://github.com/TheSurajMore" ><BsGithub size={'30px'} /></a></Th>
        <Th><a rel="noreferrer" target={'_blank'} href="https://github.com/TheSurajMore" >GitHub</a></Th>
      </Tr>
      <Tr>
        <Th><ImLocation2 size={'30px'} /></Th>
        <Th>31/4, F, Ayodhya Nagar, N-7,
            Cidco,<Text/> Aurangabad,
            Maharashtra, India 
            <Text/>431003
            (Open to relocate <Text/> according
            to job requirements)</Th>
      </Tr>
    </Thead>
  </Table>
</TableContainer>
</Box>
</Center>
  </>)
}

export default Contact; 

  // Front-end web development
  // Bcom Graduate (CGPA : 7.24)