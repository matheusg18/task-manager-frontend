import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { Heading, OrderedList, VStack } from '@chakra-ui/react';
import AddTask from '../components/AddTask';
import { ITask } from '../interfaces/api/task';
import Task from '../components/Task';
import * as api from '../api';

const Home: NextPage = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  useEffect(() => {
    api.getAllTasks().then((allTasks) => setTaskList(allTasks));
  }, []);

  const addTask = (newTask: ITask) => {
    setTaskList((prev) => [...prev, newTask]);
  };

  const removeTask = (taskToRemove: ITask) => {
    setTaskList((prev) => prev.filter(({ id }) => id !== taskToRemove.id));
  };

  return (
    <main>
      <VStack>
        <Heading as="h1" size="2xl">
          Ebtyr Task Manager
        </Heading>
        <AddTask addTask={addTask} />
        <OrderedList styleType="none" w="100%" maxW="50vw">
          {taskList.map((task) => (
            <Task key={task.id} removeTask={removeTask} {...task} />
          ))}
        </OrderedList>
      </VStack>
    </main>
  );
};

export default Home;
