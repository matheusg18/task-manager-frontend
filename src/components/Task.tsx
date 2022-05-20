import { Box, HStack, ListItem, Select, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { TASK_STATUS } from '../constants';
import { ITask } from '../interfaces/api/task';
import * as utils from '../utils';

interface PropTypes extends ITask {}

function Task({ content, createdAt }: PropTypes) {
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
      </HStack>
    </ListItem>
  );
}

export default Task;
