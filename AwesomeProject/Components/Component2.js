import React from 'react';
import { StyleSheet, Text, View, Image, Picker, Button } from 'react-native';

export default class Component2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
    }
  }
  render() {
    return (
      <View>
        {this.state.clicked ? <Text> True </Text> : <Text> False </Text>}
        <Button
          onPress={() => this.setState({clicked: true})}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
