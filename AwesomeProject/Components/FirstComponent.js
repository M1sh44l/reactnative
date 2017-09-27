import React from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';

export default class FirstComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      language: "Java",
    }
  }
  render() {
    let pic = {
      uri: 'http://www.soccer163.com/wp-content/uploads/2016/04/juventus-logo.jpg'
    }

    return (
      <View>
        <Text>
          {this.props.name}
        </Text>
        <Image source={pic} style={{width: 300, height: 300}} />
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C" value="C" />
          <Picker.Item label="Python" value="python" />
        </Picker>
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
