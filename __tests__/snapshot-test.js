import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('Snapshot testing', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});
