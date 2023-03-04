import { Avatar, Box, Divider, Heading, Stack } from '@chakra-ui/react';

export default function Home () {
  return (
    <Stack
    //   bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Box textAlign={'center'}>
        <Avatar
          src={'Suraj.png'}
          alt={'Suraj More.img'}
          size={'2xl'}
        />

        {/* <Text fontWeight={600}>Jenny Wilson</Text> */}
        <Heading>SURAJ MORE</Heading>
        {/* <Heading color={useColorModeValue('gray.400', 'gray.400')}> */}
        <Heading color={'green'} >
        Front-end web developer
        </Heading>
      </Box>
      <Divider width={'20%'} borderWidth={'5px'} borderRadius={'50%'} />
      {/* <Heading>Hello👋, Welcome to my portfolio !</Heading> */} 

    </Stack>
  );
}