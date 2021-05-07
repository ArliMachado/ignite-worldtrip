import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface ICityProps {
  info: {
    country: string;
    capital: string;
    image: string;
    flag: string;
  };
}

export default function City({ info }: ICityProps): JSX.Element {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={info.image} alt={info.country} h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {info.capital}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {info.country}
          </Text>
        </Flex>
        <Image
          src={info.flag}
          alt={`Bandeira ${info.capital}`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
