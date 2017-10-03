import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Header, Left, Right, Title} from 'native-base';
import MyContent from './Components/MyContent';
import store from './Components/Store';
import {observer} from 'mobx-react'
export default observer(class App extends React.Component {
  render() {
    return (
        <MyContent store={store}/>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
