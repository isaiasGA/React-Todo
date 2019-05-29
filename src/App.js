import React from 'react';
import  {ExampleData} from './components/ExampleData';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
 constructor () {
   super();
   this.state = {
    data: ExampleData,
    task: '',
    id:Date.now(),
    completed: false,
   }
 }

addTask = () => {
  const newTask = {
    task: '',
    id: Date.now(),
    completed: false,
  }
  
  this.setState({
    data: [...this.state.data, newTask],
  })
}

/*
 - addTask: A function used in order to call "this.state" so that the "data"
    on state can be updated every time a new "task" is written as an input.
 -seState: A function that we get to use via "React.Component"
   -It is used in order to update state.
 - Spread operator: It is used in order to copy the old data from an old array into a new array
*/

  render() {
    return (
      <div className='main-content'>
        <h1>Todo List</h1>
       <TodoList passedData={this.state.data} />
       <TodoForm newTaskData={this.addTask} />
      </div>
    );
  }
}

export default App;
