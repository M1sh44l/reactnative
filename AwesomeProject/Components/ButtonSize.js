import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';


export default class ButtonSize extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button success>
            <Text>Success Default</Text>
          </Button>
          <Button large dark>
            <Text>Dark Large</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
