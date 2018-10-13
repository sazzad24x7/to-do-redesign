import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../constants/index';

export const addTodoItem = todo =>({type: ADD_TODO , payload: todo });
export const deleteTodoItem = id =>({type: DELETE_TODO , payload: id });
export const editTodoItem = todo => ({type: EDIT_TODO, payload: todo});

