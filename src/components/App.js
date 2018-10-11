import React, { Component } from 'react';
import AddTodoItem from './../components/AddTodoItem';
import List from './../components/ShowTodos';

class App extends Component { 
  render() {
    return (
     <div>
       <AddTodoItem />
       <List />
     </div>


    );
  }
}

export default App;
