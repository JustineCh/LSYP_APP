import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loggedInUserId, usersLoad } from '../../core/reducers/UsersReducer';
import { fetchUserByEmail } from '../../core/hooks/useUsers';

export const Login = props => {
  const { register, handleSubmit, reset } = useForm();
  const [userDontExists, setUserDontExists] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loggedInUser = useCallback(id => {
    dispatch(loggedInUserId(id));
  }, []);

  useEffect(() => {
    dispatch(usersLoad());
  }, []);

  console.log('users:' + users);

  const onSubmit = formData => {
    fetchUserByEmail(formData.email).then(users => {
      if (users.length > 0) {
        const user = users[0];
        if (formData.password === user.password) {
          console.log(
            'user:' + user.email,
            'password: ' + user.password + 'zalogowany'
          );
          return;
        }
      }
      setUserDontExists(true);
    });
    reset({
      userName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="col">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            {...register('email')}
            onChange={() => setUserDontExists(false)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register('password')}
            onChange={() => setUserDontExists(false)}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      {userDontExists && (
        <p className="alert alert-warning mt-3">
          User does not exists! Please enter a valid email and password or
          create an account
        </p>
      )}
    </div>
  );
};
