import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../constants/index';

export const addTodoItem = todo =>({type: ADD_TODO , payload: todo });
