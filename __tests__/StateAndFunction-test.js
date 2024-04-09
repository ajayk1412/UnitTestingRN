import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('We are writting test cases for State and Function', () => {
  let homeData = renderer.create(<App />).getInstance();
  //   Function testing
  //   expect(homeData.increment(2)).toEqual(40);

  //State testing
  homeData.increment(2);
  expect(homeData.state.counterValue).toEqual(2);
});
