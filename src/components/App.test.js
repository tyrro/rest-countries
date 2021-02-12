import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  test('renders 3 components', () => {
    expect(wrapper.find('CountryProvider').children().length).toEqual(3);
  });
});
