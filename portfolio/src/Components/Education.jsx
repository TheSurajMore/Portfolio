import React from "react";
import {
  Table,
  Thead,
  Tfoot,
  Tr,
  Th,
  TableContainer,
  Center,
  Box,
} from '@chakra-ui/react'

const Education = () => {
  return(<>
  <Center>
  <Box>
  <TableContainer>
  <Table size='lg'>
    <Thead>
      <Tr>
        <Th>2022-2023</Th>
        <Th>Front-end web development</Th>
      </Tr>
    </Thead>
    <Tfoot>
      <Tr>
        <Th>2021</Th>
        <Th>Bcom Graduate (CGPA : 7.24)</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
</Center>
  </>)
}

export default Education; 

  // Front-end web development
  // Bcom Graduate (CGPA : 7.24)