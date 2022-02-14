import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Testing <TodoAdd />', ()=>{

  const handleAddTodo = jest.fn();
  const wrapper = shallow(
    <TodoAdd 
      handleAddTodo={ handleAddTodo }
    />
  );

  test('1. SnapShot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  test("2. Shouldn't call: handleAddTodo ", ()=>{

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit( { preventDefault(){} });
    expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    expect( handleAddTodo ).not.toHaveBeenCalled();
  })

  test('3. Should call: handleAddTodo ', ()=>{
    const value = 'Learn Node.js';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      }
    })
    
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit( { preventDefault(){} });
    expect( handleAddTodo ).toHaveBeenCalled();
    expect( handleAddTodo ).toHaveBeenCalledTimes(1);
    expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ) // Any Object { } pass test
    expect( handleAddTodo ).toHaveBeenCalledWith( {
      id: expect.any(Number), // Any number pass test
      desc: value,
      done: false,
    } )
    expect( wrapper.find('input').prop('value') ).toBe('');
  });

})