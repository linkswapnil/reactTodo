import React from 'react';
import {shallow} from 'enzyme';
import Todo from './Todo';

it('applies completed class when todo item is marked as completed',()=>{
 const todo = {
   isCompleted : true,
   title:{
       name : 'test todo'
   }
 };
 const wrapper = shallow(<Todo todo={todo}/>);
 expect(wrapper.find('pre.completed').length).toEqual(1);
 expect(wrapper.find('button.markAsDone').prop('disabled')).toBeTruthy();
});

it('does not applies completed class when todo item is not marked as completed',()=>{
    const todo = {
        isCompleted : false,
        title:{
            name : 'test todo'
        }
    };
    const wrapper = shallow(<Todo todo={todo}/>);
    expect(wrapper.find('pre.completed').length).toEqual(0);
});

it('invokes deleteItem function on prop when clicked on delete button',()=>{
    const mockOnDeleteTodo = jest.fn();
    const todo = {
        isCompleted : false,
        title:{
            name : 'test todo'
        }
    };
    const wrapper = shallow(<Todo todo={todo} onDeleteTodo={mockOnDeleteTodo}/>);
    wrapper.find('button.delete').simulate('click');
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(todo);
});

it('invokes onMarkAsDone function on prop when clicked on mark as done button',()=>{
    const mockMarkAsDone = jest.fn();
    const todo = {
        isCompleted : false,
        title:{
            name : 'test todo'
        }
    };
    const wrapper = shallow(<Todo todo={todo} onMarkAsDone={mockMarkAsDone}/>);
    wrapper.find('button.markAsDone').simulate('click');
    expect(mockMarkAsDone).toHaveBeenCalledWith(todo);
});