import { AxiosResponse } from 'axios';
import { TASK_STATUS } from '../constants';
import { ITask, ITaskUpdateRequest, ITaskApiResponse } from '../interfaces/api/task';
import { myAxios } from '../utils';

const editStatus = async (taskId: string, newStatus: TASK_STATUS): Promise<ITask> => {
  const response = await myAxios.patch<
    ITaskApiResponse,
    AxiosResponse<ITaskApiResponse>,
    ITaskUpdateRequest
  >(`/task/${taskId}`, { status: newStatus });
  const { content, createdAt, id, status } = response.data;

  return { id, content, status, createdAt: new Date(createdAt) };
};

export { editStatus };
