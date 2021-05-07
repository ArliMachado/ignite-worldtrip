import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(): JSX.Element {
  const { asPath } = useRouter();
  const isContinent = asPath !== '/';
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h="24"
      mx="auto"
      px={['50px', '100px']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isContinent && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[16, 32]} />
            </a>
          </Link>
        )}
        <Image
          w={['81px', '184px']}
          src="/logo.png"
          alt="Logo"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
