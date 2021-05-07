import { Grid, Text } from '@chakra-ui/react';
import Info from './Info';

interface IContinentContentProps {
  bio: string;
  info: {
    totalCountries: number;
    totalLanguages: number;
    totalCities: number;
  };
}

export default function ContinentContent({
  bio,
  info,
}: IContinentContentProps): JSX.Element {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        {bio}
      </Text>

      <Info info={info} />
    </Grid>
  );
}
