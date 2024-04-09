import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({adapter: new Adapter()});
it('Shallow rendering', () => {
  const wrapper = shallow(<App />);
  // const componentInstance = wrapper.instance();
  //Accessing react lifecyle methods
  // componentInstance.componentDidMount();
  //Accessing component state
  expect(wrapper.state('counterValue')).toEqual(0);

  //Accessing class methods
  //   expect(componentInstance.increment(1)).toEqual(1);
});
