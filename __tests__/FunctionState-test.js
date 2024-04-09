import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

it('function and state test cases', () => {
  let homeData = renderer.create(<App />).getInstance();
  //Function testing
  //   expect(homeData.increment(2)).toEqual(20);

  //State testing
  homeData.increment(2);
  expect(homeData.state.counterValue).toEqual(2);
});
