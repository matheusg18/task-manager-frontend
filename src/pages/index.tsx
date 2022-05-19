import React from 'react';
import type { NextPage } from 'next';
import { Heading, VStack } from '@chakra-ui/react';
import AddTask from '../components/AddTask';

const Home: NextPage = () => {
  return (
    <main>
      <VStack>
        <Heading as="h1" size="2xl">
          Ebtyr Task Manager
        </Heading>
        <AddTask />
      </VStack>
    </main>
  );
};

export default Home;
