import { AxiosResponse } from 'axios';
import { ITask, ITaskCreateRequest, ITaskApiResponse } from '../interfaces/api/task';
import { myAxios } from '../utils';

const createNewTask = async (newTaskContent: string): Promise<ITask> => {
  const newTask = await myAxios.post<
    ITaskApiResponse,
    AxiosResponse<ITaskApiResponse>,
    ITaskCreateRequest
  >('/task', { content: newTaskContent });
  const { content, createdAt, id, status } = newTask.data;

  return { id, content, status, createdAt: new Date(createdAt) };
};

export { createNewTask };
