import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasksSortedByNewest } from '../../core/hooks/UseTasks';
import { loadTasksSortedByNewest } from '../../core/reducers/UsersReducer';
import Tasks from './Tasks';


const NewestTasks = props => {
   const dispatch = useDispatch();
   const newestTasks = useSelector(state => state.users.newestTasks)
   const loadNewestTasks = useCallback(tasks => {
      dispatch(loadTasksSortedByNewest(tasks));
   }, []);

   useEffect(() => {
      fetchTasksSortedByNewest().then((tasks) => loadNewestTasks(tasks))
   }, [])

   return (
      <Tasks tasks={newestTasks} />
   );
};

export default NewestTasks;
