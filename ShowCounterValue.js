import {Component} from 'react';
import {View, Text} from 'react-native';

export default class ShowCounterValue extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps() {
    return null;
  }
  componentDidMount() {
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidUpdate() {
  }
  getSnapshotBeforeUpdate() {
    return null;
  }
  render() {
    return (
      <View>
        <Text>{this.props.counterValue}</Text>
      </View>
    );
  }
}
