import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';


  const showTodos = (props) => {
      console.log("bug fixing showTodos", props)
      if(props){
       return props.todoData.map(todo => (
            <div><p>{todo.text}</p></div>
          )
          )
      }else{
          return <h1>Hello world</h1>
      }
     
  }
  const mapStateToProps = state => {
    console.log('show todo data', state)
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
