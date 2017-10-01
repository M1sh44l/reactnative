import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from 'native-base';
import { observer } from 'mobx-react';
import store from './Components/Store';

import MyHeader from './Components/MyHeader';
import MyFooter from './Components/MyFooter';
import MyContent from './Components/MyContent';

import MyNewList from './Components/MyNewList';
import MyUsersList from './Components/MyUsersList';



export default observer(class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
      <MyHeader store={store}/>
      <MyContent store={store}/>
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

// import FirstComponent from './Components/FirstComponent';
// import Component2 from './Components/Component2';
// import ButtonSize from './Components/ButtonSize';
// import CardHeaderFooter from './Components/CardHeaderFooter';
// import CardList from './Components/CardList';
// import CheckBoxExample from './Components/CheckBoxExample';
// import DynamicList from './Components/DynamicList';
// import PlacePicker from './Components/PlacePicker';


// <ButtonSize />
// <CardHeaderFooter />
// <CardList />
// <CheckBoxExample />
// <DynamicList />
//  <PlacePicker />
// <MyHeader store={store}/>
// <MyNewList />
