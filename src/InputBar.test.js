import React from 'react';
import InputBar from './InputBar';
import { shallow, mount } from 'enzyme';

it('should contain input element with placeholder',()=>{
   const wrapper = shallow(<InputBar />);
   const placeHolderText = "I'm going to..";
   const inputElement = wrapper.find('input');
   expect(inputElement.length).toEqual(1);
   expect(inputElement.prop('placeholder')).toEqual(placeHolderText);
});

it('should have add button', () => {
    const wrapper = shallow(<InputBar />);
    const addButton = wrapper.find('button');
    expect(addButton.length).toEqual(1);
    expect(addButton.text()).toEqual('Add');
});

it('calls addTodo function on click',()=>{
    const mockFn = jest.fn();
    const wrapper = mount(<InputBar onNewTodo={mockFn}/>);
    const input = wrapper.ref('todoTitle');
    const addButton = wrapper.find('button');
    input.value = "abc";
    addButton.simulate('click');
    expect(mockFn).toHaveBeenCalledWith({
        name : "abc"
    });
    expect(input.value).toEqual("");
});

it("calls addTodo function on enter",()=>{
    const mockFn = jest.fn();
    const wrapper = mount(<InputBar onNewTodo={mockFn}/>);
    const inputElement = wrapper.find('input');
    const input = wrapper.ref('todoTitle');
    input.value = "abc";
    inputElement.simulate('keyPress',{key:"Enter"});
    expect(mockFn).toHaveBeenCalledWith({
        name : "abc"
    });
});
