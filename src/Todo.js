import React, {Component} from 'react';


class Todo extends Component {
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.markAsDone = this.markAsDone.bind(this);
    }
    deleteItem(){
        this.props.onDeleteTodo(this.props.todo);
    }
    markAsDone(){
        this.props.onMarkAsDone(this.props.todo);
    }
    render() {
        return(
            <div>
                <pre className={this.props.todo.isCompleted ? 'completed' : ''}>{this.props.todo.title.name}</pre>
                <button className={'delete'} onClick={this.deleteItem}>Delete</button>
                <button className={'markAsDone'} disabled={this.props.todo.isCompleted} onClick={this.markAsDone}>Mark as done</button>
            </div>
        );
    }
}

export default Todo;