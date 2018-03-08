import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: '',
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
        this.handleInputTextChangeEvent = this.handleInputTextChangeEvent.bind(this);
    }
    handleFormSubmit(event) {
        event.preventDefault();        
        this.props.handleNewTodoItem(this.state.todoText);

        this.setState( prevState => {
            return {
                todoText: prevState.todoText = '',
            }
        });

    }

    handleInputTextChangeEvent(event) {
        let todoText = event.target.value;
        
        this.setState( () => {
            return {
                todoText: todoText,
            };
        });
    }

    handleRefInputEvt(inputRef) {
        inputRef.focus();
    }
    render () {
        return(
            <div>
                <form 
                    className="form-group" 
                    onSubmit={this.handleFormSubmit}>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Add a Todo" 
                        ref={this.handleRefInputEvt}
                        value={this.state.todoText}
                        onChange={this.handleInputTextChangeEvent}
                    />
                    {this.state.todoText}
                    <br />
                    <button className="btn-primary btn-lg" type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;