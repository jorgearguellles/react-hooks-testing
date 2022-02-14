import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';


describe('Testing <TodoListItem />', ()=>{

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow( 
    <TodoListItem 
      todo={ demoTodos[0]}
      index={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  );

  test('1. SnapShop', ()=>{
    expect(wrapper).toMatchSnapshot();
  });

  test('2. Should called deleted function', ()=>{
    wrapper.find('button').simulate('click')
    expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('3. Should called toggle function', ()=>{
    wrapper.find('p').simulate('click')
    expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('4. Should to show paragraph text content: 1. description first element', ()=>{
    const p = wrapper.find('p');
    expect( p.text() ).toBe( `1. ${ demoTodos[0].desc }` )
  })

  test('5. Should to have complete class if toDo.done is true', ()=>{
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow( 
      <TodoListItem 
        todo={ demoTodos[0]}
      />
    );
    expect( wrapper.find('p').hasClass('complete') ).toBe(true);
  });
});