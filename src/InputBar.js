import React, {Component} from 'react';

class InputBar extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    addTodo(){
      const newTodoName = this.refs.todoTitle.value;
      if(newTodoName){
          this.props.onNewTodo({
              name : newTodoName
          });
          this.refs.todoTitle.value = '';
      }
    }
    onKeyPress(e){
        if(e.key === "Enter"){
            this.addTodo();
        }
    }
    render(){
        return(
            <div>
                <input onKeyPress={this.onKeyPress} type="text" placeholder="I'm going to.."  ref="todoTitle"/>
                <button onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}

export default InputBar;