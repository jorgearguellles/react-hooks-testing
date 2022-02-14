import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('testing <useReducer />', ()=>{
  test('1. Should return default state: demoTodos', ()=>{
    const state = todoReducer( demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('2. When action is type: add, should add one to do', ()=>{
    const newTodo = {
      id: 3,
      desc: 'New to do',
      done: false,
    };
    const action = {
      type: 'add',
      payload: newTodo
    };
    const state = todoReducer( demoTodos, action);
    expect( state.length).toBe(3);
    expect( state ).toEqual( [...demoTodos, newTodo] );
  });

  test('3. When action is type delete, should delete one to do depending ID', ()=>{
    const action = {
      type: 'delete',
      payload: 2
    };
    const state = todoReducer( demoTodos, action);
    expect( state.length ).toBe(1);
    expect( state ).toEqual( [demoTodos[0]] );
  });

  test('4. When action is type toggle, should toggle between true <-> false', ()=>{
    const action = {
      type: 'toggle',
      payload: 1,
    };
    const state = todoReducer( demoTodos, action);
    expect( state[0].done ).toBe(true);
    expect( state[1] ).toEqual( demoTodos[1] );
  })

})