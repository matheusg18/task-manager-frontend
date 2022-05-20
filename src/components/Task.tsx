import React, { ChangeEvent } from 'react';
import { Box, HStack, IconButton, ListItem, Select, Tag, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { TASK_STATUS } from '../constants';
import { ITask } from '../interfaces/api/task';
import * as api from '../api';
import * as utils from '../utils';

interface PropTypes extends ITask {
  removeTask: (taskToRemove: ITask) => void;
  editTask: (editedTask: ITask) => void;
}

function Task({ id, content, createdAt, status, removeTask, editTask }: PropTypes) {
  const handleDelete = async () => {
    await api.deleteTask(id);
    removeTask({ id, content, createdAt, status });
  };

  const handleEditStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    const newStatus = event.target.value as TASK_STATUS;

    await api.editStatus(id, newStatus);
    editTask({ id, content, createdAt, status: newStatus });
  };

  return (
    <ListItem>
      <HStack justifyContent="space-between">
        <Text>{content}</Text>
        <Box flexGrow={1} />
        <Select value={status} onChange={handleEditStatus} variant="filled" width="fit-content">
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
