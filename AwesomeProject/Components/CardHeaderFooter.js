import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default class CardHeaderFooter extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  I am testing an iPhone simulator using React Native.
                  Let us check what it will show in a bit.
                  Just needing an extra line.
                  Let's do this.
                  Yep, kinda.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Mishaal</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
