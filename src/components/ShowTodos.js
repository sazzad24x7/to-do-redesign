import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import DeleteTodoItem from './DeleteTodoItem';
import EditTodoItem from './EditTodoItem';


  const showTodos = (props) => {
      if(props){
       return props.todoData.map(todo => (
            <div>
                <h1>{todo.text}</h1>
                <DeleteTodoItem todoId = {todo.id} />
                <EditTodoItem editTodo = {todo}/>
                <span>Complete</span>
            </div>
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
