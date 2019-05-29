import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
          {props.passedData.map(list => (
           <Todo list={list} />
          ))}
        </div>
     );
}

export default TodoList;