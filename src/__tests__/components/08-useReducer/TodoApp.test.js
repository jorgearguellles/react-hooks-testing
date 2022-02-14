import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Testing <TodoApp />', ()=>{

  const wrapper = shallow( <TodoApp/> );
  
  Storage.prototype.setItem = jest.fn( ()=>{} ); // Simulated setItem was called

  test('1. SnapShot', ()=>{
    expect( wrapper ).toMatchSnapshot();
  });

  test('2. Should to add one, two ToDo', ()=>{
    const wrapper = mount( <TodoApp/> )
    act( ()=>{
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] ) // Add one to do
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] ) // Add another to do
    })
    expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 2 )');
    expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
  });

  test('3. Should to delete a to do', ()=>{
    wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
    expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 1 )');

    wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
    expect( wrapper.find('h1').text().trim() ).toBe('TodoApp ( 0 )');
  })
})