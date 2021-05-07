import Link from 'next/link';
import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

interface IContinent {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface ISliderProps {
  continents: IContinent[];
}

export default function ContinentSlider({
  continents,
}: ISliderProps): JSX.Element {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mv={['5', '10']}
      h={['250px', '450px']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1', marginBottom: '40px' }}
      >
        {continents.map(({ slug, title, description, image }) => (
          <SwiperSlide key={slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)),url(${image})`}
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPosition="center"
            >
              <Link href={`/continent/${slug}`}>
                <a>
                  <Heading
                    fontSize={['3xl', '4xl', '5xl']}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {description}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
