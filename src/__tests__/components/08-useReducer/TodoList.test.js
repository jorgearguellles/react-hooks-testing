import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/08-useReducer/TodoList';


describe('Testing <TodoList />', ()=>{

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow( 
    <TodoList 
      todos={demoTodos}
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  );

  test('1. SnapShot', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  test('2. Should to have two <TodoLitItem />', ()=>{
    expect( wrapper.find('TodoListItem').length ).toBe(2);
    expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
  });
  
  test('3. <TodoLitItem /> should receive props: handleDelete, handle Toggle', ()=>{
    const handleDeleteProp = wrapper.find('TodoListItem').at(0).prop('handleDelete');
    expect( typeof(handleDeleteProp) ).toBe('function');
    expect( handleDeleteProp ).toEqual( expect.any(Function) );

    const handleToggleProp = wrapper.find('TodoListItem').at(0).prop('handleToggle');
    expect( typeof(handleToggleProp) ).toBe('function');
    expect( handleToggleProp ).toEqual( expect.any(Function) );
  })
})