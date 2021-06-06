import axios from 'axios';

export const fetchTasks = () => {
   return axios.get('http://localhost:3000/tasks').then(resp => resp.data);
};

export const fetchTasksByUserId = userId => {
   return axios
      .get('http://localhost:3000/tasks?userId=' + userId)
      .then(resp => resp.data);
};
