import React from "react";
import {
  Table,
  Thead,
  TableContainer,
  Center,
  Box,
  Divider,
} from '@chakra-ui/react'

const Education = () => {
  return(<>
  <Center ml={'2%'} mr={'2%'} >
  <Box >
  <TableContainer >
  <Table size='lg'>
      <Thead>
        2022 - March 2023 => MERN stack / Full stack web developer 
      </Thead>
      <br></br>
      <Divider/>
      <br></br>
      <Thead>
        2021 => Bcom Graduate 
      </Thead>
  </Table>
</TableContainer>
</Box>
</Center>
  </>)
}

export default Education; 

