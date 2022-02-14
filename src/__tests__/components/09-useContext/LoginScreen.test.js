import React from "react";
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Testing <LoginScreen />', ()=>{

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={ { setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('1. SnapShot', ()=>{
    expect( wrapper ).toMatchSnapshot();
  });

  test('2. Should call setUser with right arguments', ()=>{
    wrapper.find('button').prop('onClick')();
    expect( setUser ).toBeCalledWith({
      id: 123,
      name: 'Fernando'
    });
  })
})