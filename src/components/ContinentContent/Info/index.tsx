import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

interface InfoProps {
  info: {
    totalCountries: number;
    totalLanguages: number;
    totalCities: number;
  };
}

export default function Info({ info }: InfoProps): JSX.Element {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {info.totalCountries}
        </Heading>
        <Text fontWeight="600" fontSize={['md', 'xl']} color="gray.700">
          paises
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {info.totalLanguages}
        </Heading>
        <Text fontWeight="600" fontSize={['md', 'xl']} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="500">
          {info.totalCities}
        </Heading>
        <Flex>
          <Text fontWeight="600" fontSize={['md', 'xl']} color="gray.700">
            cidades +100
          </Text>
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="1"
                  color="gray.400"
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                Napoli, Porto, Catalunha, Barcelona, Manchester, Liverpool
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
}
