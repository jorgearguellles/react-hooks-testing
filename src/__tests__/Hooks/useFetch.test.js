import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch.js';


describe('Testing <useFetch />', ()=>{

  const initialState = { 
    data: null, 
    loading: true, 
    error: null 
  };
  const url = 'https://www.breakingbadapi.com/api/quotes/1' 

  test('1. When useFetch called, should return initial state by default', ()=>{
    const { result } = renderHook( ()=> useFetch(url) );
    const { data, loading, error } = result.current;

    expect( data ).toBe(null);
    expect( loading ).toBeTruthy();
    expect( loading ).toBe(true);
    expect( error ).toBe(null);
  });

  test('2. When useFetch called, should return data from api, it means: data: [{}], loading:false, error, false', async ()=>{
    const { result, waitForNextUpdate } = renderHook( () => useFetch(url) );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(loading).toBeFalsy();
    expect(error).toBe(null);
  });

  test('3. When useFetch called and failed, should handle error, it means: data: null, loading: false, error, true/message', async ()=>{
    const url = 'https://www.breakingbadapi.com/apid/users?pages=2'
    const { result, waitForNextUpdate } = renderHook( () => useFetch(url) );
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(loading).toBeFalsy();
    expect(error).toBe('Can not load info');
  });
})