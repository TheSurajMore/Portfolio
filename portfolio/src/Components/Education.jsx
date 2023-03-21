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
        2022-2023 => Front-end web development
      </Thead>
      <Divider/>
      <Thead>
        2021 => Bcom Graduate (CGPA : 7.24)
      </Thead>
  </Table>
</TableContainer>
</Box>
</Center>
  </>)
}

export default Education; 

  // Front-end web development
  // Bcom Graduate (CGPA : 7.24)