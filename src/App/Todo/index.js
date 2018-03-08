import React, { Component } from 'react';
import TodoForm from './TodoForm';
import ShowTodos from './ShowTodos';
import TodosCount from './TodosCount';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
        //this.handleOnClickCheckBox = this.handleOnClickCheckBox.bind(this);

        this.state = {
            todos: [],
        }
    }

   handleNewTodoItem(todo) {
        this.setState( prevState => {
            
            const todoItem = {
                todo: todo,
                id: Date.now().toString(),
                completed: false,
            }
            
            //const todos = prevState.todos.concat(todoItem);
            
            return {
                todos: prevState.todos.concat(todoItem),
            }
        });
   }

   handleDeleteButtonClick(event) {

        const arrayIndex = Number(event.target.value);
        this.setState( prevState => {
            //todos.splice(arrayIndex, 1); Prefer not to mutate the state object
            let todos = prevState.todos.slice(0, arrayIndex).concat(prevState.todos.slice(arrayIndex + 1));
            return {
                todos: prevState.todos = todos,
            }
        });
   }

   /*
   handleOnClickCheckBox(event) {
    const arrayIndex = Number(event.target.value);
    console.log('you touched it', arrayIndex);
        this.setState( prevState => {
            
            let todos = ( 
                prevState.todos.slice(0, arrayIndex)
                .concat([{
                    todo: prevState.todos[arrayIndex].todo,
                    id: prevState.todos[arrayIndex].id,
                    completed: prevState.todos[arrayIndex].completed = false,

                }])    
                .concat(prevState.todos.slice(arrayIndex + 1)) 
            ); 

            this.setState( (prevState) => {
                return {
                    todos: prevState.todos = todos,
                }
            });
            
        });
   }

   */


    render () {
        return(
            <div className="container text-center">
                <TodoForm handleNewTodoItem={this.handleNewTodoItem}/>
                <ShowTodos 
                    todos={this.state.todos} 
                    handleDeleteButtonClick={this.handleDeleteButtonClick}
                    handleOnClickCheckBox={this.handleOnClickCheckBox}
                />
                <TodosCount numberOfTodos={this.state.todos.length}/>
            </div> 
        );
    }
}

export default Todo;