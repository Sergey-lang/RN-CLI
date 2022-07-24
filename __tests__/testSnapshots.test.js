import renderer from 'react-test-renderer';
import {Text} from 'react-native';
import React from 'react';

it('renders correctly', () => {
  const tree = renderer.create(<Text>Facebook</Text>).toJSON();
  expect(tree).toMatchSnapshot();
});
