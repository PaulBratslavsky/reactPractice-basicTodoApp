import React from 'react';
import TodoItem from './TodoItem'

const ShowTodos = (props) => {
   
    return(
        <ul className="list-group">
        {props.todos.map( todo => {
            return(
                <TodoItem 
                handleDeleteButtonClick={props.handleDeleteButtonClick}
                    todo={todo}/>
            );
        })}
        </ul>
    );
}

export default ShowTodos;


/*
{props.todos.map( todo => {
                return(
                    <TodoItem 
                    handleDeleteButtonClick={props.handleDeleteButtonClick}
                        todo={todo}/>
                );
            })}

-----

 let todoList = [];
    let todos = props.todos;
    for ( let i = 0; todos.length; ++i ) {
        todoList.push(
            <TodoItem todo={todos[i]} index={i} />
        )
    }
            */