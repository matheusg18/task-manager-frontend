import { myAxios } from '../utils';

const deleteTask = async (taskId: string): Promise<void> => {
  await myAxios.delete(`/task/${taskId}`);
};

export { deleteTask };
