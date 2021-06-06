import axios from 'axios';

export const fetchUserByEmail = email => {
  // real backend would handle email uniqueness validation, so this step is to be removed when real backend is in place
  return axios
    .get('http://localhost:3000/users?email=' + email)
    .then(resp => resp.data);
};
