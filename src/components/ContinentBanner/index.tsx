import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBannerProps {
  banner: {
    image: string;
    title: string;
  };
}

export function ContinentBanner({ banner }: ContinentBannerProps): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      bgImage={`url('${banner.image}')`}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={['center', 'center', 'flex-start']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
    >
      <Heading
        textAlign={['center', 'left']}
        fontSize={['2rem', '4rem']}
        fontWeight="600"
        color="gray.100"
      >
        {banner.title}
      </Heading>
    </Flex>
  );
}
