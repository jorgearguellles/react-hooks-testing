import React from 'react';
import '@testing-library/jest-dom';
import { mount, shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Testing <TodoApp />', ()=>{

  const wrapper = shallow( <TodoApp/> )
  test('1. SnapShot', ()=>{
    expect( wrapper ).toMatchSnapshot();
  });
  test('2. Should to add one ToDo', ()=>{
    const wrapper = mount( <TodoApp/> )
    console.log(wrapper)
  })
})