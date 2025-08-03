import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      msg: 'Complete react lecture',
      completed: false
    }
  ],

  addTodo: (todo)=>{},
  deleteTodo: (id)=>{},
  updateTodo: (id,todo)=>{},
  toggleCompleteTodo: (id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
  return useContext(TodoContext)
}