import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteTodoItem} from '../actions/index';
import { AppButtonOnlyIcon } from '../ui/Button';

class DeleteTodoItem extends Component{

    deleteTodoHandler = (props) => {
        this.props.deleteTodoItem(this.props.todoId);
      }

    deleteButtonBlock = () =>{
       return (<AppButtonOnlyIcon 
            btnIcon = "delete"
            btnSize = "massive"
            onClickEvent = {this.deleteTodoHandler}
            btnColor = "red"
            />)
    }

    render(){
        return(
            <div> {this.deleteButtonBlock()}</div>
        )
           
    }
}

const mapDispatchToProps = dispatch => {
    return {
      deleteTodoItem: todo => dispatch(deleteTodoItem(todo)),
    }
  };

  


  export default connect(null, mapDispatchToProps)(DeleteTodoItem);