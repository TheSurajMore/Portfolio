import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const nav = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('black', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <Box ><Kbd>Portfolio</Kbd></Box> */}
          {/* <Heading color={'White'} >SURAJ MORE</Heading> */}
          <Heading color={'White'} as={'h1'} size={'md'} >Hello👋, Welcome to my portfolio !</Heading>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button onClick={()=>nav('/')} >Home</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}