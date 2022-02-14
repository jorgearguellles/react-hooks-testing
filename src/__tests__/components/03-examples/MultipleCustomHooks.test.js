import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks.js';
import { useFetch } from '../../../hooks/useFetch.js';
import { useCounter } from '../../../hooks/useCounter.js';
jest.mock('../../../hooks/useFetch.js'); // Mock implementation -  prevent useFetch calls
jest.mock('../../../hooks/useCounter.js'); // Mock implementation -  prevent useCounter calls



describe('Testing <MultipleCustomHooks />', ()=>{

  useCounter.mockReturnValue({
    counter: 10,
    increment: ()=>{},
  });

  test('1. SnapShot without data', ()=>{

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks/>);
    expect( wrapper ).toMatchSnapshot();
  });

  test('2. SnapShot with data', ()=>{

    useFetch.mockReturnValue({
      data: [{
        author: 'Jorge',
        quote: 'Hello Sexy'
      }],
      loading: false,
      error: null
    })

    const wrapper = shallow( <MultipleCustomHooks/>);
    expect( wrapper ).toMatchSnapshot();
  });

  test('3. When we get info ready, Should to show info, it meas: div Alert no exist, quote and author data exist', ()=>{
    useFetch.mockReturnValue({
      data: [{
        author: 'Jorge',
        quote: 'Hello Sexy'
      }],
      loading: false,
      error: null
    })
    const wrapper = shallow( <MultipleCustomHooks/>);
    expect( wrapper.find('.alert').exists() ).toBe(false); // Loading not exist
    expect( wrapper.find('.mb-0').text().trim() ).toBe('Hello Sexy'); // Quote exist
    expect( wrapper.find('.blockquote-footer').text().trim() ).toBe('Jorge'); // Author exist
  });
});