import React from "react";
import '@testing-library/jest-dom';
import { mount } from "enzyme";
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from "../../../components/09-useContext/UserContext";
// import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Testing <AppRouter />', ()=>{

  const user = {
    id: 1,
    name: 'Jorge'
  }

  const wrapper = mount( 
    <UserContext.Provider value={ { user }}>
      <AppRouter/> 
    </UserContext.Provider>
  );

  test('1. SnapShot', ()=>{
    expect( wrapper ).toMatchSnapshot();
  });
})