import React from 'react';
import {shallow} from 'enzyme';
import TodoList from './TodoList';

it('renders Todo items equal to the length of todos', () => {
    const todos = [{
        id: 1,
        title: 'item1'
    }, {
        id: 2,
        title: 'item2'
    }];
    const wrapper = shallow(<TodoList todos={todos}/>);
    expect(wrapper.find('Todo').length).toEqual(2);
});

it('calls onMarkAsDone function when onMarkAsDone prop is invoked', () => {
    const mockOnMarkAsDone = jest.fn();
    const todos = [{
        id: 1,
        title: 'item1'
    }];
    const wrapper = shallow(<TodoList todos={todos} onMarkAsDone={mockOnMarkAsDone}/>);
    wrapper.find('Todo').prop('onMarkAsDone')(todos[1]);
    expect(mockOnMarkAsDone).toHaveBeenCalledWith(todos[1]);
});

it('calls onDeleteTodo function when onDeleteTodo prop is invoked', () => {
    const mockOnDeleteTodo = jest.fn();
    const todos = [{
        id: 1,
        title: 'item1'
    }];
    const wrapper = shallow(<TodoList todos={todos} onDeleteTodo={mockOnDeleteTodo}/>);
    wrapper.find('Todo').prop('onDeleteTodo')(todos[1]);
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(todos[1]);
});