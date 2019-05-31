import React from 'react';
import './Todo.css';

const Todo = props=>  {
    return (
        <div className={`task ${props.list.completed ? 'completed' : '' }` }
         onClick={() => props.toggleTask(props.list.id)}>
        <p>{props.list.task}</p>
        </div>
    );
};

/*
- "A line will appear through each task when we click on the task"
      <div className={`task ${props.list.completed ? 'completed' : '' }` }
      
 -Ternaty Statement (JS): A simplified IF statement.
   - "if" "{props.list.completed" is TRUE then we are going to add "purchased" class , if not, ":" then nothing will be added "''"
*/

/*
 - An anonymous function is used when we need to pass down data, "id" inside a HANDLER, "ONCLICK"
  - an anonymous function, in this situations. is passing a FUNCTION DEFINITON, and inside the function definitions
    a FUNCTION INVOCATION.
*/

export default Todo;