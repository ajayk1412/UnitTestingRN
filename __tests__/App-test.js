/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('snapshot testing', () => {
  const snap = renderer.create(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});

// Snapshot testing— Snapshot tests are a very useful tool
// whenever you want to make sure your UI does not change unexpectedly.
// A typical snapshot test case renders a UI component, takes a snapshot,
//  then compares it to a reference snapshot file stored alongside the test.
