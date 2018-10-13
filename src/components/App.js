import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import AddTodoItem from './../components/AddTodoItem';
import List from './../components/ShowTodos';

class App extends Component { 
  render() {
    return (
     <div>
         <Container>
          <Header  size="huge" color="purple" textAlign = "center">ToDo App</Header>
          <AddTodoItem />
          <List />
       </Container>
     </div>


    );
  }
}

export default App;
