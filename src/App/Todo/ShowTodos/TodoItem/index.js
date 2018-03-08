import React, { Component } from 'react'; 

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            priority: 0,
        }

    this.handlePriorityButtonUp = this.handlePriorityButtonUp.bind(this);
    this.handlePriorityButtonDown = this.handlePriorityButtonDown.bind(this);
    }

    handlePriorityButtonDown() {
        console.log("Priority up clicked");

        this.setState( prevState => {
            return {
                priority: prevState.priority - 1,
            }
        });
    }

    handlePriorityButtonUp() {
        console.log("Priority up clicked");

        this.setState( prevState => {
            return {
                priority: prevState.priority + 1,
            }
        });
    }
    render() {
        return(
            <li className="list-group-item">
                <button  onClick={this.handlePriorityButtonDown} className="float-left d-inline">-</button>
                <input type="button" value={this.state.priority} className="float-left d-inline" />
                <button  onClick={this.handlePriorityButtonUp} className="float-left d-inline">+</button>
                <h3 className="d-inline">{this.props.todo}</h3>
                <button 
                    className="btn btn-default btn-danger float-right d-inline" 
                    onClick={this.props.handleDeleteButtonClick} 
                    value={this.props.index}
                >Delete</button>
            </li>
        );
    }
}

export default TodoItem;