import { TASK_STATUS } from '../../constants';

export interface ITask {
  id: string;
  content: string;
  status: TASK_STATUS;
  createdAt: Date;
}

export interface ITaskCreateRequest {
  content: string;
}

export interface ITaskApiResponse {
  id: string;
  content: string;
  status: TASK_STATUS;
  createdAt: string;
}

export interface ITaskUpdateRequest {
  content?: string;
  status?: TASK_STATUS;
}
