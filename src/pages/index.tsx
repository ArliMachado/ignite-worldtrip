import { Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';

import { api } from '../services/api';
import { Banner } from '../components/Banner';
import Divider from '../components/Divider';
import { Header } from '../components/Header';
import Slider from '../components/ContinentSlider';
import TravelTypes from '../components/TravelTypes';

interface IContinent {
  slug: string;
  title: string;
  description: string;
  image: string;
}

interface IHomeProps {
  continents: IContinent[];
}

export default function Home({ continents }: IHomeProps): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/continentsSlider');

  return {
    props: { continents: response.data },
  };
};
