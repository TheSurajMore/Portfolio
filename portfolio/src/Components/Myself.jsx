import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Center,
    Box,
    Divider,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  import {FcAlarmClock} from 'react-icons/fc'
  import {BsPersonWorkspace} from 'react-icons/bs'
  import {GiFlexibleStar, GiFlexibleLamp} from 'react-icons/gi'

  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Myself() {
    return (
      <Container maxW={'5xl'} py={12} >
          <Stack spacing={4}>
            <Heading>The Complete Web Developer in 2023: Zero to Mastery</Heading>
            <Heading color={'blue.500'} ><a target='_blank' href="https://www.udemy.com/certificate/UC-b7373586-5571-44d2-bc5c-6a9f553501b8/">Certificate Link</a></Heading>
            <Divider borderWidth={'5px'} borderRadius={'50%'} />
          </Stack>
      </Container>
    );
  }