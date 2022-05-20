import { Button, HStack, Input } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import * as api from '../api';
import { ITask } from '../interfaces/api/task';

interface PropTypes {
  addTask: (newTask: ITask) => void;
}

function AddTask({ addTask }: PropTypes) {
  const [content, setContent] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = await api.createNewTask(content);
    addTask(newTask);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          placeholder="Fazer um café"
          variant="filled"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Adicionar</Button>
      </HStack>
    </form>
  );
}

export default AddTask;
