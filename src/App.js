import React from 'react';
import  {ExampleData} from './components/ExampleData';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
 constructor () {
   super();
   this.state = {
    data: ExampleData,
    task: '',
    id: 12 ,
    completed: false,
   }
 }
  render() {
    return (
      <div className='main-content'>
        <h1>Todo List</h1>
       < TodoList passedData={this.state.data} />
      </div>
    );
  }
}

export default App;
