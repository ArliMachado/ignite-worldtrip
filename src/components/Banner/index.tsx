import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner(): JSX.Element {
  return (
    <Flex
      backgroundImage="url('banner.jpg')"
      w="100%"
      // maxWidth={1480}
      h={['163px', '250px', '250px', '335px']}
      // mt="7"
      backgroundPosition={['100% 20%', '100% 20%', '100% 30%']}
      backgroundRepeat="no-repeat"
    >
      <Flex
        align="center"
        justify={['center', 'space-between']}
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={['xl', '2l', '2xl', '2xl', '4xl']}
          >
            5 continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            mt="20px"
            fontSize={['0.8rem', 'xl']}
            color="gray.300"
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          src="Airplane.png"
          alt="Airplane"
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
