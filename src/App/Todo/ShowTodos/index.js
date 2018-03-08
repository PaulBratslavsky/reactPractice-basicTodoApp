import React from 'react';
import TodoItem from './TodoItem'

const ShowTodos = (props) => {
   let todoList = [];
   let todos =props.todos;

   for ( let i = 0; i < todos.length; ++i ) {
       console.log('Inside For Loop');
       todoList.push(
            <TodoItem 
                todo={todos[i].todo} 
                key={todos[i].id}
                index={i}
                completed={todos[i].completed} 
                handleDeleteButtonClick={props.handleDeleteButtonClick} 
                handleOnClickCheckBox ={props.handleOnClickCheckBox} 
            />            
        );
        console.log(todos[i].todo);
        console.log(todos[i].id);

   }

   return(
        <ul className="list-group">
            {todoList}        
        </ul>
    );
}

export default ShowTodos;