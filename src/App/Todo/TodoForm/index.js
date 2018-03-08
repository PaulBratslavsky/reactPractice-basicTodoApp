import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.inputRef = null;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
    }
    handleFormSubmit(event) {
        //debugger;
        event.preventDefault();
        console.log('Form Submitted');
        
        const todo = this.inputRef.value;
        this.props.handleNewTodoItem(todo);
        this.inputRef.value = '';

    }

    handleRefInputEvt(inputRef) {
        this.inputRef = inputRef;
    }
    render () {
        return(
            <div>
                <form className="form-group" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" type="text" placeholder="Add a Todo" ref={this.handleRefInputEvt}/>
                    <br />
                    <button className="btn-primary btn-lg" type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;