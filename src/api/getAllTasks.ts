import { ITask, ITaskApiResponse } from '../interfaces/api/task';
import { myAxios } from '../utils';

const getAllTasks = async (): Promise<ITask[]> => {
  const response = await myAxios.get<ITaskApiResponse[]>('/task');
  const allTasks = response.data;

  return allTasks.map(({ id, content, status, createdAt }) => ({
    id,
    content,
    status,
    createdAt: new Date(createdAt),
  }));
};

export { getAllTasks };
