import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register } = useForm();

  return (
    <div class="col">
      <h2>Create an account!</h2>
      <form className="w-75 ">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User name:
          </label>
          <input className="form-control" {...register('userName')} />
        </div>
        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">
            Email address
          </label>
          <input className="form-control" {...register('emailAddress')} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            {...register('password')}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};
