import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { observer } from "mobx-react";
import MyButton from './MyButton';

export default observer(class MyHeader extends Component {
  render() {
    return (
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
    );
  }
})
