import { Grid, GridItem } from '@chakra-ui/react';
import TravelTypeItem from './TravelTypeItem';

export default function TravelTypes(): JSX.Element {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelTypeItem icon="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelTypeItem icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <TravelTypeItem icon="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelTypeItem icon="classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelTypeItem icon="more" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
