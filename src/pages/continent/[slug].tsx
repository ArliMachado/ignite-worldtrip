import { Flex } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { Cities } from '../../components/Cities';
import { ContinentBanner } from '../../components/ContinentBanner';
import ContinentContent from '../../components/ContinentContent';
import { Header } from '../../components/Header';
import { api } from '../../services/api';

interface ICity {
  country: string;
  capital: string;
  image: string;
  flag: string;
}

interface IContinentContend {
  banner: {
    title: string;
    image: string;
  };
  body: {
    bio: string;
    info: {
      totalCountries: number;
      totalLanguages: number;
      totalCities: number;
    };
  };
  cities: ICity[];
}

interface IContinentProps {
  continent: IContinentContend;
}

export default function Continent({ continent }: IContinentProps): JSX.Element {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner banner={continent.banner} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1px">
        <ContinentContent bio={continent.body.bio} info={continent.body.info} />
        <Cities cities={continent.cities} />
      </Flex>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await api.get(`/continents/?slug=${params.slug}`);

  return {
    props: { continent: response.data[0] },
  };
};
