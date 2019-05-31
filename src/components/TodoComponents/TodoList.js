import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className='todo-list'>
          {props.passedData.map(list => {
           return (
           <Todo 
             key={list.id}
             toggleTask={props.toggleTask} 
             list={list} 
           />
         );
        })}
      </div>
     );
}

/*
  * KEYS: Key properties are used EVERYTIME WE MAP over an array that will return JSX
    - Keys allow React to keep track of these ITEMS better
    keys are to be unique so it is best to use ID as key
*/
export default TodoList;