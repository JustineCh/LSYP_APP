import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { fetchUserByEmail, postNewUser } from '../../core/hooks/useUsers';

export const Register = props => {
  const [userExists, setUserExists] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const users = useSelector(state => state.users.users);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = formData => {
    fetchUserByEmail(formData.email).then(users => {
      if (users.length > 0) {
        setUserExists(true);
      } else {
        const newUser = { ...formData, type: 'user' };
        postNewUser(newUser);
        setRegisterSuccess(true);
      }
    });
    reset({
      userName: '',
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    setTimeout(() => setRegisterSuccess(false), 3000);
  }, [users]);

  return (
    <div className="col">
      <h2>Create an account!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            User name
          </label>
          <input
            className="form-control"
            {...register('name', { required: true })}
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
      {registerSuccess && (
        <p className="alert alert-success mt-3">
          You have successfully created an account! You can login now and use
          your TaskManager
        </p>
      )}
    </div>
  );
};
