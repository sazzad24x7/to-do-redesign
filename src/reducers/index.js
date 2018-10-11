import {ADD_TODO, EDIT_TODO, DELETE_TODO} from '../constants/index';

const initialState = {
    todoData : [
        /* {
            id: null,
            text: "",
            colorBlock: "",
            completion: false,
            isInputFieldShow: false
        } */
     ]
}
const rootReducer = (state = initialState, action) =>{
   switch(action.type){
       case ADD_TODO :
            return { ...state, todoData : state.todoData.concat(action.payload) };

       case  EDIT_TODO:
            return state;

       case DELETE_TODO:
            return state;

       default:
        return state;
   }
}

export default rootReducer;