import {
    Box,
    Center,
    Divider,
    Heading,
    Stack,
    Text,
  } from '@chakra-ui/react';
  

  const PackageTier = ({
    title,
    typePlan,
  }: PackageTierProps) => {

  
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <Heading size={'xl'}>{typePlan}</Heading>
      </Stack>
    );
  };
  const Education = () => {
    return (
      <Center >
      <Box py={3} px={250} min={'100vh'} width={'80%'} borderWidth={'5px'} >
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <PackageTier title={'2022-2023'} typePlan="Front-end web development"/>
          <Divider borderWidth={'3px'} />
          <PackageTier title={'2021'+ '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}  typePlan="Bcom Graduate (CGPA : 7.24)"/>
        </Stack>
      </Box>
      </Center>
    );
  };
  
  export default Education;