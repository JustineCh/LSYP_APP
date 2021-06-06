import React from 'react';
import Navbar from '../../core/components/Navbar';
import MyTasks from '../components/MyTasks';
import { useSelector } from 'react-redux';
import Tasks from '../components/Tasks';
import NewestTasks from '../components/NewestTasks';

const Mainview = props => {
  const selectedUser = useSelector(state => state.users.loggedInUser);
  return (
    <div className="col">
      <Navbar />
      <div className="row mb-4 mt-4">
        <div className="col">
          <h2>Witaj {selectedUser.name}</h2>
        </div>
        <div className="col">
          <button className="btn btn-primary">+ Create a new task</button>
        </div>

      </div>

      <div className="row">
        <div className="col-sm">
          <h4>Your Tasks</h4>
          <MyTasks />
        </div>
        <div className="col-sm">
          <h4>New tasks</h4>
          <NewestTasks />
        </div>
        <div className="col-sm">
          <h4>New comments</h4>
          One of three columns
            </div>
      </div>

    </div>
  );
};

export default Mainview;
