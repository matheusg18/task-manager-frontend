import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Heading, VStack } from '@chakra-ui/react';
import AddTask from '../components/AddTask';
import { ITask } from '../interfaces/api/task';

const Home: NextPage = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (newTask: ITask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  return (
    <main>
      <VStack>
        <Heading as="h1" size="2xl">
          Ebtyr Task Manager
        </Heading>
        <AddTask addTask={addTask} />
      </VStack>
    </main>
  );
};

export default Home;
