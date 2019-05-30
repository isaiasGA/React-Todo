import React from 'react';
import  {ExampleData} from './components/ExampleData';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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

addTask = (event) => {
  event.preventDefault();
  const newTask = {
    task: this.state.task,
    id: this.state.id,
    completed: this.state.completed,
  }
  
  this.setState({
    data: [...this.state.data, newTask],
  });
};

/*
  * addTask: It creates a new task object each time its called.
    - A function used in order to call "this.state" so that the "data"
    on state can be updated every time a new "task" is written as an input.
    - each property on state is referencing the properties on our state in order to allow the user to ADD content when typing in our form.

  * event.preventDefault(); It is used to prevent REFRESHING the webpage each time an user CLICKS on a buttons.

  * Synthetic events: Events object that REACT creates off of an event that happened in the browser.


 -seState: A function that we get to use via "React.Component"
   -It is used in order to update state.
 - Spread operator: It is used in order to copy the old data from an old array into a new array
*/

  render() {
    return (
      <div className='main-content'>
        <h1>Todo List</h1>
       <TodoList passedData={this.state.data} />
       <TodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
