import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Testing <HomeScreen />', ()=>{

  const user = {
    name: 'Jorge',
    email: 'jorge@gmail.com'
  }
  const wrapper = mount( 
    <UserContext.Provider value={{ user }}>
      <HomeScreen /> 
    </UserContext.Provider>
  );

  test('1. SnapShot', ()=>{
    expect( wrapper ).toMatchSnapshot();
  })
})