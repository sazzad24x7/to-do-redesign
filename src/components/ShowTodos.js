import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import DeleteTodoItem from './DeleteTodoItem';
import EditTodoItem from './EditTodoItem';
import { Grid } from 'semantic-ui-react';
import { AppButtonOnlyIcon } from '../ui/Button';

  const showTodos = (props) => {
      if(props){
       return props.todoData.map(todo => (
           <Grid>
               <Grid.Row columns={4}>
               <Grid.Column width={10}>
                    <h1>{todo.text}</h1>
               </Grid.Column>
               <Grid.Column width={2}>
                    <EditTodoItem editTodo = {todo}/>  
               </Grid.Column>
               <Grid.Column width={2}>
                    <DeleteTodoItem todoId = {todo.id} />
               </Grid.Column>
               <Grid.Column width={2}>
               <AppButtonOnlyIcon
            btnIcon = "check"
            btnSize = "massive"
            onClickEvent = {()=>""}
            btnColor = "yellow"
            />
               </Grid.Column>                
               </Grid.Row>
           </Grid>
          )
          )
      }else{
          return <h1>Hello world</h1>
      }
     
  }
  const mapStateToProps = state => {
    return { todoData: state.todoData ? state.todoData : null };
  };
  function mapDispathToProps(dispatch) {
      const actions =  {
          test: () => ({type: 'TEST'})
      }
      return bindActionCreators(actions, dispatch)
  }
const List = connect(mapStateToProps,mapDispathToProps )(showTodos);
export default List;
