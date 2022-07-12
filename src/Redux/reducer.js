import {ADD_TODO } from "./action";

const initialState={
    TodoList:[]
}
export const reducer = (store=initialState,action) =>{
switch(action.type){
    case ADD_TODO:
        return{
            ...store,
            TodoList:[...store.TodoList,action.payload]
        }
        default:
            return store;
}

}

