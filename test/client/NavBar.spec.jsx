import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../../client/components/NavBar';

describe('<NavBar />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.getNodes()).toMatchSnapshot();
  });
});
