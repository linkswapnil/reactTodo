import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('renders header component', () => {
  const wrapper = shallow(<Header />);
  const headerHtml = "<h2>Welcome to my todo App</h2>";
  expect(wrapper.html()).toEqual(headerHtml);
});

