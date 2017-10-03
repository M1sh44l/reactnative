import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Right, Title, Body } from 'native-base';
import { observer } from 'mobx-react';

export default observer(class MyHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    )
  }
})
