import React from 'react';
import  {ExampleData} from './components/ExampleData';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
 constructor () {
   super();
   this.state = {
     ExampleData,
   }
 }

addTask = (taskName) => {
  const newTask = {
    task: taskName,
    id: Date.now(),
    completed: false,
  }
  
  this.setState(prevState => {
    return {
    ExampleData: [...prevState.ExampleData, newTask],
    }
  });
};

/*
 - prevState: It refers to the items and our state date, "exampledata"
 - "newTask" will be added to the back of the array/

 -"newTask": It is being passed down as an ARGUMENT in our addTask function because we are missing task name.
*/

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
toggleTask = id => {
  this.setState(prevState => {
   return { 
    ExampleData: prevState.ExampleData.map(task => {
       if (task.id === id) {
          return {
            ...task,
            completed: !task.completed 
          };
       } else {
         return task;
       }
     })
    };
  });
};

/*
 "if the task on this loop, mapped, is the task that we clicked on, then we will return a new task object"
    "If the the task that we looked up is not the task we CLICKED ON then it the old object in state will be returned untouched"  
         "else {
             return task;"
      
  - completed property will be overritten with the OPPOSITE, "!task"  OF  our old completed property.
*/

/* - toggle will allow us to identify the right item that the user clicked on.
  - toggleTask: A fucntion that will allows us to UPDATE our state by updating a single ITEM or OBJECT on our STATE DATA.
    - we are going to loop through "this.state.data" one item at a time, and find the correct ITEM/object that we clicked on in order to toggle the correct property.
  - id: It is passed in as an argument in order to acccess "id" from  our data in state.
     - "id" is passed down as an ARGUMENT to  "Todo.js"
  - SPREAD OPERATOR ... : It is being used to  build a new object. *Old properties from old array will be passed down to new object and OVERWRITING "completed field"


 -It is important to write ARROW FUNCTIONS inside class components, IN ORDER TO BIND the function with the class component otherwise, the function will not
   be recognized.
*/
  render() {
    return (
      <div className='main-content'>
        <div className='header'>
          <h1>Todo List</h1>
          < TodoForm addTask={this.addTask}/>
        </div>
       <TodoList
          passedData={this.state.ExampleData} 
          toggleTask={this.toggleTask}
          />
    
      </div>
    );
  }
}

export default App;
