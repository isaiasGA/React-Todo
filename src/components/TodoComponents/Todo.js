import React from 'react';

const Todo = props=>  {
    return (
        <div className='todos'>
            <p>
              {props.list.task}
            </p>
        </div>
    );
}

export default Todo;