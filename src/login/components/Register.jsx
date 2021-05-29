import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = data => console.log(data);

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
            <p className="alert-danger mt-1">User name is required</p>
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
              minLength: 7,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="alert-danger mt-1">Email is required</p>
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
              minLength: 7,
              pattern: /^[a-zA-Z0-9]*$/i,
            })}
          />
          {errors.password && (
            <p className="alert-danger mt-1">
              Password is required and should be at least 7 characters long and
              consist of letters and numbers
            </p>
          )}
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
