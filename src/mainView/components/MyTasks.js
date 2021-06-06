import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksByUserId } from '../../core/hooks/UseTasks';
import { loadCurrentUserTasks } from '../../core/reducers/UsersReducer';


const MyTasks = props => {
   const dispatch = useDispatch();
   const selectedUser = useSelector(state => state.users.loggedInUser)
   const selectedUserTasks = useSelector(state => state.users.currentUserTasks)
   const loadSelectedUserTasks = useCallback(user => {
      dispatch(loadCurrentUserTasks(user));
   }, []);

   useEffect(() => {
      fetchTasksByUserId(selectedUser.id).then((tasks) => loadSelectedUserTasks(tasks))
   }, [])

   return (
      <div className="card" >
         <ul className="list-group list-group-flush">
            {selectedUserTasks && selectedUserTasks.map(task => {
               return <li className="list-group-item">{task.title}</li>
            })}
         </ul>
      </div>
   );
};

export default MyTasks;
