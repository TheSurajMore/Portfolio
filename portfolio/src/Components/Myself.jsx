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
            <Heading>As a web developer, I am always ready to convert any possibility into reality. </Heading>
            <Divider borderWidth={'5px'} borderRadius={'50%'} />
            <Text color={'gray.500'} fontSize={'lg'}>
            I have the following qualities and I believe that the following qualities will enable me to contribute to our organization and my own currier.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
                <Center>
                  <Box>
              <Feature
                icon={
                  <Icon as={FcAlarmClock} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Discipline'}
              />
              <Feature
                icon={<Icon as={GiFlexibleLamp} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Consistency'}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Patience'}
              />
                            <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Smart working'}
              />
              <Feature
                icon={<Icon as={BsPersonWorkspace} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Hard Working'}
              />
              <Feature
                icon={
                  <Icon as={GiFlexibleStar} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Flexible'}
              />
                            <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Always developing and upgrading'}
              />
              </Box>
              </Center>
            </Stack>
          </Stack>
      </Container>
    );
  }