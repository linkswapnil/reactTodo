import React, {Component} from 'react';
import Header from './Header'
import './App.css';
import InputBar from './InputBar';
import TodoList from './TodoList';

class App extends Component {
    constructor(props, state){
        super(props, state);
        this.state = {
            todoList : []
        };
        this.addTodo = this.addTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onMarkAsDone = this.onMarkAsDone.bind(this);
    }
    addTodo(title) {
        let id = 1;
        if(this.state.todoList.length > 0){
            id = this.state.todoList[this.state.todoList.length - 1].id + 1;
        }
        this.setState({
            todoList : this.state.todoList.concat({
                id,
                title
            })
        })
    }
    onDeleteTodo(todo) {
        let todoList = this.state.todoList.filter(function (item) {
            return todo.id !== item.id;
        });
        this.setState({
            todoList
        });
    }
    onMarkAsDone(todo){
        this.state.todoList.forEach(function (item) {
            if(todo.id === item.id){
                item.isCompleted = true;
            }
        });
        this.setState({
            todoList : this.state.todoList
        })

    }
    render() {
        return (
            <div className="App">
                <Header className="Header"/>
                <InputBar className="InputBar" onNewTodo={this.addTodo}/>
                <TodoList className="TodoList" onMarkAsDone={this.onMarkAsDone} onDeleteTodo={this.onDeleteTodo} todos={this.state.todoList}/>
            </div>
        );
    }
}

export default App;
