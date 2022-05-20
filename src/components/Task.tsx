import { Box, HStack, ListItem, Select, Text } from '@chakra-ui/react';
import React from 'react';
import { TASK_STATUS } from '../constants';
import { ITask } from '../interfaces/api/task';
import * as utils from '../utils';

interface PropTypes extends ITask {}

function Task({ content, createdAt }: PropTypes) {
  return (
    <ListItem>
      <HStack>
        <Text>{content}</Text>
        <Select variant="filled">
          <option value={TASK_STATUS.PENDING}>Pendente</option>
          <option value={TASK_STATUS.IN_PROGRESS}>Em andamento</option>
          <option value={TASK_STATUS.DONE}>Pronto</option>
        </Select>
        <Box>{utils.formatDate(createdAt)}</Box>
      </HStack>
    </ListItem>
  );
}

export default Task;
