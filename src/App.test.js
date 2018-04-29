import React from 'react';
import App from './App';
import Header from './Header'
import InputBar from './InputBar'
import TodoList from './TodoList'
import {shallow} from 'enzyme';

let wrapper;

beforeEach(()=>{
    wrapper = shallow(<App/>);
});

it('contains header component', () => {
    expect(wrapper.find('Header')).toBeDefined();
});

it('contains InputBar component', () => {
    expect(wrapper.find('InputBar')).toBeDefined();
});

it('contains TodoList component', () => {
    expect(wrapper.find('TodoList')).toBeDefined();
});

describe("addTodo()", () => {

    it('adds a todoItem on todoList', () => {
        expect(wrapper.state().todoList.length).toEqual(0);
        const input = wrapper.find('InputBar');
        input.prop('onNewTodo')('testItem 1');
        let expectedTodoList = [{
            id: 1,
            title: 'testItem 1'
        }];
        expect(wrapper.state().todoList).toEqual(expectedTodoList);
        input.prop('onNewTodo')('testItem 2');
        expectedTodoList.push({
            id: 2,
            title: 'testItem 2'
        });
        expect(wrapper.state().todoList).toEqual(expectedTodoList);
    })

});

describe("onDeleteTodo()", () => {
    it('deletes a todoItem in todoList', () => {
        expect(wrapper.state().todoList.length).toEqual(0);
        const input = wrapper.find('InputBar');
        input.prop('onNewTodo')('testItem 1');
        let expectedTodoList = [{
            id: 1,
            title: 'testItem 1'
        }];
        expect(wrapper.state().todoList).toEqual(expectedTodoList);
        wrapper.find('TodoList').prop('onDeleteTodo')(expectedTodoList[0]);
        expect(wrapper.state().todoList.length).toEqual(0);
    })
});

describe("onMarkAsDone()", () => {
    it('marks todo item as compeleted', () => {
        expect(wrapper.state().todoList.length).toEqual(0);
        const input = wrapper.find('InputBar');
        input.prop('onNewTodo')('testItem 1');
        let expectedTodoList = [{
            id: 1,
            title: 'testItem 1'
        }];
        expect(wrapper.state().todoList).toEqual(expectedTodoList);
        wrapper.find('TodoList').prop('onMarkAsDone')(expectedTodoList[0]);
        expect(wrapper.state().todoList[0].isCompleted).toBeTruthy();
    })
});