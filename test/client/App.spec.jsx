import React from 'react';
import { mount } from 'enzyme';

import App from '../../client/components/App';

describe('<App />', () => {
  it('should render', () => {
    const app = mount(<App />);

    expect(app.find('div').length).toBeGreaterThanOrEqual(1);
  });
});
