import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { observer } from 'mobx-react';
import FirstComponent from './Components/FirstComponent';
import Component2 from './Components/Component2';
import ButtonSize from './Components/ButtonSize';
import CardHeaderFooter from './Components/CardHeaderFooter';
import CardList from './Components/CardList';
import CheckBoxExample from './Components/CheckBoxExample';
import DynamicList from './Components/DynamicList';
import PlacePicker from './Components/PlacePicker';
import MyHeader from './Components/MyHeader';
import store from './Components/Store';



export default observer(class App extends React.Component {
  render() {
    return (
      <Container>
        <MyHeader store={store}/>
      </Container>
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

  centered: {
    alignItems: 'center',
  }
});

// <ButtonSize />
// <CardHeaderFooter />
// <CardList />
// <CheckBoxExample />
// <DynamicList />
//  <PlacePicker />
