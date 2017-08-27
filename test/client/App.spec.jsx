import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/components/App';

describe('<App />', () => {
  it('should render', () => {
    const app = shallow(<App />);

    expect(app.find('div').length).toEqual(1);
  });
});
