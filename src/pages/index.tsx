import React from 'react';
import type { NextPage } from 'next';
import { Heading, VStack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <main>
      <VStack>
        <Heading as={'h1'} size={'2xl'}>
          Ebtyr Task Manager
        </Heading>
      </VStack>
    </main>
  );
};

export default Home;
