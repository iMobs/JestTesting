import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NavBar from '../../client/components/NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
