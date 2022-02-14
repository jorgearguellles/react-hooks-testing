import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp.js';
import '@testing-library/jest-dom';


describe('Tests in <HookApp.ja />', ()=>{
  test('1. Snapshot correctly', ()=>{
    const wrapper = shallow( <HookApp/> );
    expect(wrapper).toMatchSnapshot();
  })
})