import axios from 'axios';
export const fetchTasksByUserId = userId => {
   return axios
      .get('http://localhost:3000/tasks?userId=' + userId)
      .then(resp => resp.data);
};

export const fetchTasksSortedByNewest = () => {
   return axios
      .get('http://localhost:3000/tasks?_sort=createdAt&_order=desc')
      .then(resp => resp.data);
};