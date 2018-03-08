import React from 'react';

const TodosCount = (props) => {
    return(
        <div className="card bg-light p-3">
            <h4>Total Todos: {props.numberOfTodos}</h4>
        </div>
    );
}

export default TodosCount;