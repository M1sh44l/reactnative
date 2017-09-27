import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstComponent from './Components/FirstComponent';
import Component2 from './Components/Component2';
import ButtonSize from './Components/ButtonSize';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Coded!</Text>
        <FirstComponent name="Mishaal"/>
        <Component2 />
        <ButtonSize />
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
