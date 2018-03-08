import React from 'react'; 

const TodoItem = (props) => {
   
        return(
            <li className="list-group-item">
                <input 
                    type="checkbox" 
                    checked={props.completed} 
                    className="float-left" 
                    onChange={props.handleOnClickCheckBox}
                    value={props.index}
                />
                <h3 className="d-inline">{props.todo}</h3>
                <button 
                    className="btn btn-default btn-danger float-right d-inline" 
                    onClick={props.handleDeleteButtonClick} 
                    value={props.index}
                >Delete</button>
            </li>
        );
   
}

export default TodoItem;