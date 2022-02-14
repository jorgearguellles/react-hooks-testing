import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks'
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
// jest.mock('../../../hooks/useFetch.js'); // Mock implementation -  prevent useFetch calls
// jest.mock('../../../hooks/useCounter.js'); // Mock implementation -  prevent useCounter calls

describe('Testing <RealExampleRef />', ()=>{

  const wrapper = shallow( <RealExampleRef />);

  test('1. SnapShot, means show H1text: RealExampleRef and buttonText: Show/Hide', ()=>{
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('h1').text().trim() ).toBe('RealExampleRef');
    expect( wrapper.find('.btn').text().trim() ).toBe('Show/Hide');
    expect( wrapper.find('.MultipleCustomHooks').exists() ).toBe(false);
  });

  test('2. When button clicked should to show MultipleCustomHooks component', ()=>{
    wrapper.find('button').simulate('click');
    expect( wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  })

})