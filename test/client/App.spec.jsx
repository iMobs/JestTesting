import React from 'react';
import { Button } from 'react-bootstrap';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { App } from '../../client/components/App';

describe('<App />', () => {
  let wrapper;
  let fn;

  beforeEach(() => {
    fn = jest.fn();
    wrapper = shallow(<App count={0} buttonCallback={fn} />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call the callback on click', () => {
    wrapper.find(Button).simulate('click');

    expect(fn).toBeCalled();
  });
});
