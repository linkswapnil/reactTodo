import React, {Component} from 'react';
import Todo from './Todo'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onMarkAsDone = this.onMarkAsDone.bind(this);
    }
    onDeleteTodo(todo){
        this.props.onDeleteTodo(todo);
    }
    onMarkAsDone(todo){
        this.props.onMarkAsDone(todo);
    }
    render() {
        return(
            <div>
                <h3> Todos : </h3>
                <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            <li key={todo.id}>
                                <Todo onMarkAsDone={this.onMarkAsDone} onDeleteTodo={this.onDeleteTodo} todo={todo}/>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default TodoList;