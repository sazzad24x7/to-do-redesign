import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../constants/index';

const initialState = {
    todoData : []
}
const rootReducer = (state = initialState, action) =>{
   switch(action.type){
       case ADD_TODO :
            return { ...state, todoData : state.todoData.concat(action.payload) };

       case  EDIT_TODO :
            console.log(action.payload)
            return {...state, todoData: state.todoData.map((todo) => (todo.id === action.payload.id) ? todo = action.payload : todo)};
       case DELETE_TODO:
       return {...state, todoData: state.todoData.filter((item) => item.id !== action.payload)}

       default:
        return state;
   }
}

export default rootReducer;