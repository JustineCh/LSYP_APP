import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { usersAdd } from '../../core/reducers/UsersReducer';

export const Register = props => {
  const [userExists, setUserExists] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const saveNewUser = useCallback(draft => {
    dispatch(usersAdd(draft));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = data => {
    if (users.filter(user => user.email === data.email).length > 0) {
      setUserExists(true);
    } else {
      const max = Math.max(...users.map(user => Number(user.id)), 0);
      const newId = max + 1;
      data.id = newId.toString();
      saveNewUser(data);
    }
    reset({
      userName: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="col">
      <h2>Create an account!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User name
          </label>
          <input
            className="form-control"
            {...register('userName', { required: true })}
          />
          {errors.userName?.type === 'required' && (
            <p className="alert-danger mt-3">User name is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            {...register('email', {
              required: true,
              pattern: /@/,
            })}
            onChange={() => setUserExists(false)}
          />
          {errors.email && (
            <p className="alert-danger mt-3">Valid email is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register('password', {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
            })}
          />
          {errors.password && (
            <p className="alert-danger mt-3">
              Password is required and should be at least 7 characters long and
              consist of letters and numbers
            </p>
          )}
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      {userExists && (
        <p className="alert alert-info mt-3">
          User already exists! Please go to Login section
        </p>
      )}
    </div>
  );
};
