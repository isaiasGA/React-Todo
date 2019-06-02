import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super ();
        this.state = {
            task: ''
        };
    }

/*
  - list:'': A value that wwill control our INPUT.
*/

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

/*
  * handleChanges: It identifies the correct input when a user types in our form in order to update state with the VALUE that was typed.
    -  [event.target.name]: It is usuallly used to control multiple INPUTS but it can also be used for one input
  * Each time our user types inside our input, "todo", we will run "this.setState"
     - we set up setState to list: "" property because it is controlling our input below
  * HANDLECHANGES: a FUNCTION that will allow an user to TYPE in our form
        - This function will update our state, list:'asdd', each time an user types input, "asdd"
*/

addTask = event => {
  event.preventDefault(); //will prevent refresh
  this.props.addTask(this.state.task); //will add new task to our list
  this.setState({   //will reset our form when we submit our form.
     task: ''
  });
};

/*
  - "onSubmit={this.addTask}>": a handler that will trigger the "addTask" class property, above
*/

clearTasks = event => {
  event.preventDefault ();
  this.props.clearTasks(this.state.task)
  this.setState({
    task: ''
 });
}

render() {
    return (
        <form onSubmit={this.addTask}>
          <input placeholder='...todo'
            type='text'
            value={this.state.task}
            name="task"
            onChange={this.handleChanges}
            />
            <button>Add Todo</button>
            <button onClick={this.clearTasks}>Clear Completed</button>
        </form>
    )
}

/*
   * type, value, name, onChange: These are known as attributes
   * value: An attribute that is used in order to reference the empty string in our class , task: ''.
      - list is the only state property that we will refer to on the value attribute because it is the only one on our state.
   * name: It is used in order to MATCH the correct PROPERTY on state that is CONTROLLING the INPUT in our form
        - as for our form, we only have one property controlling our "list".
        - having a name property will make out handleChanges property more dynamic.
   * onChange: An event handler that will keeps track of all typing events happening in our input, '...todo'
            - This event handler will refernce the function "handlechanges" above.
             - handlechanges function allows the user to actually TYPE inside our form!!!
*/

} 

export default TodoForm;




