import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm.js';

describe('Testing <useForm />', ()=>{

  const initialForm = {
    name: 'Jorge',
    email: 'jorge@gmail.com'
  }

  test('1. When useForm is called without initial value, Should return a value: {}, and two functions (handleInputChange, reset) by default',()=>{
    const { result } = renderHook( ()=> useForm() );
    const [ values, handleInputChange, reset ] = result.current;
  /* result.current let me see data returned from my customHook: data, function,s objs, etc - console.log(result.current)*/
    expect( values ).toEqual( {} );
    expect( typeof(handleInputChange) ).toBe('function');
    expect( typeof(reset) ).toBe('function');
  });

  test('2. When useForm is called wit initial value, Should return a value: initialForm',()=>{
    const { result } = renderHook( ()=> useForm(initialForm) );
    const [ values ] = result.current;
    expect( values ).toEqual( initialForm );
  });

  test('3. Should change input form value', ()=>{
    const { result } = renderHook( ()=> useForm(initialForm) );
    const [ , handleInputChange ] = result.current;
    act( ()=>{
      handleInputChange({
        target: {
          name: 'name',
          value: 'Carlos',
        }
      });
      // handleInputChange({
      //   target: {
      //     name: 'email',
      //     value: 'carlos@gmail.com',
      //   }
      // });
    })
    const [ values ] = result.current;
    expect( values.name ).toBe('Carlos');
    expect( values ).toEqual({ name: 'Carlos', email: 'jorge@gmail.com'});
    expect( values ).toEqual({ ...initialForm, name: 'Carlos'});
  })

  test('4. Should reset form value to initialForm values', ()=>{
    const { result } = renderHook( ()=> useForm(initialForm) );
    const [ ,handleInputChange, reset ] = result.current;
    act( ()=>{
      handleInputChange({
        target: {
          name: 'name',
          value: 'Carlos',
        }
      });
      reset()
    })
    const [ values ] = result.current;
    expect( values ).toEqual( initialForm );
  })
})