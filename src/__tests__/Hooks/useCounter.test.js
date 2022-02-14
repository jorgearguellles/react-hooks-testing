import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter.js';

describe('Testing <useCounter />', ()=>{
  test('1. When useCounter is called without initial value, Should return a number (10) a three functions (increment, decrement, reset) by default',()=>{
    const { result } = renderHook( ()=> useCounter() );
  /* result.current let me see data returned from my customHook: data, function,s objs, etc - console.log(result.current)*/
    expect( result.current.counter ).toBe(10);
    expect( typeof(result.current.increment) ).toBe('function')
    expect( typeof(result.current.decrement) ).toBe('function')
    expect( typeof(result.current.reset) ).toBe('function')
  });
  test('2. When useCounter is called with initial value, Should return the counter with that initial value',()=>{
    const { result } = renderHook( ()=> useCounter(200) );
    expect( result.current.counter ).toBe(200);
  });
  test('3. When Increment function called, should increment counter by 1, its mean final result 11', ()=>{
    const { result } = renderHook( ()=> useCounter() );
    const { increment } = result.current;
    act( ()=> {
      increment();
    })
    const { counter } = result.current;
    expect( counter ).toBe(11);
  })
  test('4. When Decrement function called, should decrement counter by 1, its mean final result 9', ()=>{
    const { result } = renderHook( ()=> useCounter() );
    const { decrement } = result.current;
    act( ()=> {
      decrement();
    })
    const { counter } = result.current;
    expect( counter ).toBe(9);
  })
  test('5. When Reset function called, should reset counter by initial value, its mean final result 10', ()=>{
    const { result } = renderHook( ()=> useCounter() );
    const { increment, reset } = result.current;
    act( ()=> {
      increment();
      reset();
    });
    const { counter } = result.current;
    expect( counter ).toBe(10);
  })
});