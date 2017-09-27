import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer, Content, Text } from 'native-base';
import {observer} from 'mobx-react';
import MyButton from './MyButton';

export default observer(class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>
            {this.props.store.name}
          </Text>
          <MyButton />
        </Content>
      </Container>
    );
  }
})
