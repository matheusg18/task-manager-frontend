import React from 'react';
import { Box, HStack, IconButton, ListItem, Select, Tag, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { TASK_STATUS } from '../constants';
import { ITask } from '../interfaces/api/task';
import * as api from '../api';
import * as utils from '../utils';

interface PropTypes extends ITask {
  removeTask: (taskToRemove: ITask) => void;
}

function Task({ id, content, createdAt, status, removeTask }: PropTypes) {
  const handleDelete = async () => {
    await api.deleteTask(id);
    removeTask({ id, content, createdAt, status });
  };

  return (
    <ListItem>
      <HStack justifyContent="space-between">
        <Text>{content}</Text>
        <Box flexGrow={1} />
        <Select variant="filled" width="fit-content">
          <option value={TASK_STATUS.PENDING}>Pendente</option>
          <option value={TASK_STATUS.IN_PROGRESS}>Em andamento</option>
          <option value={TASK_STATUS.DONE}>Pronto</option>
        </Select>
        <Tag>{utils.formatDate(createdAt)}</Tag>
        <IconButton
          aria-label={`Excluir a task: ${content}`}
          variant="ghost"
          icon={<FaTrash />}
          onClick={handleDelete}
        />
      </HStack>
    </ListItem>
  );
}

export default Task;
