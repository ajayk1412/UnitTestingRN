import {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ShowCounterValue from './ShowCounterValue';
import styles from './styles';
import Users from './Users';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('Parent constructor');
    this.state = {
      counterValue: 0,
    };
  }

  componentDidMount() {
    // console.log('ParentcomponentDidMount');
    Users.all().then(data => console.log('check api data', data));
  }

  increment = x => {
    // return x * 10;
    this.setState({counterValue: x});
  };

  render() {
    console.log('Parent render');
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          testID="increment"
          style={styles.buttonStyle}
          onPress={this.increment}>
          <Text>Increment Value12</Text>
        </TouchableOpacity>
        <ShowCounterValue counterValue={this.state.counterValue} />
      </View>
    );
  }
}
