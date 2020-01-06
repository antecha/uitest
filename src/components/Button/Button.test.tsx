import React from 'react';
import { create } from 'react-test-renderer';
import Button from './index';

describe('Button', () => {
  const testRenderer = create(<Button />);

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
