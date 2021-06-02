import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://localhost:3000/users').then(resp => resp.data.items);
};

export const fetchUserByEmail = email => {
  // real backend would handle email uniqueness validation, so this step is to be removed when real backend is in place
  //   debugger;
  return axios
    .get('http://localhost:3000/users?email=' + email)
    .then(resp => resp.data);
};
