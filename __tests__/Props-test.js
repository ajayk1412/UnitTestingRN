import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowCounterValue from '../ShowCounterValue';

configure({adapter: new Adapter()});

it('testing props', () => {
  const wrapper = shallow(<ShowCounterValue counterValue={4} />).props();
  console.log("wrapper", wrapper)
  expect(wrapper.children.props.children).toEqual(4);
});
