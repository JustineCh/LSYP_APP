import React from 'react';


const Tasks = ({ tasks }) => {
   return (
      <div className="card" >
         <ul className="list-group list-group-flush">
            {tasks && tasks.map(task => {
               return <li className="list-group-item" key={task.id}>{task.title}</li>
            })}
         </ul>
      </div>
   );
};

export default Tasks;
