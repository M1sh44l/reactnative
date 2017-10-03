import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Icon, Button } from 'native-base';
import {observer} from 'mobx-react';

export default observer(class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button iconLeft light>
            <Icon name='arrow-back' />
            <Text>Back</Text>
          </Button>
          <Button iconRight light>
            <Text>Next</Text>
            <Icon name='arrow-forward' />
          </Button>
          <Button iconLeft>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button iconLeft transparent primary>
            <Icon name='beer' />
            <Text>Pub</Text>
          </Button>
          <Button iconLeft dark>
            <Icon name='cog' />
            <Text>Settings</Text>
          </Button>
        </Content>
      </Container>

    )
  }
})
