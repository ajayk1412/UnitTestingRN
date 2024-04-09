import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

const findElement = (tree, element) => {
  let result;
  for (let node in tree.children) {
    if (tree.children[node].props.testID === element) {
      result = true;
    }
  }
  return result;
};

it('find element or identify element', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(findElement(tree, 'increment1')).toBeDefined();
});
