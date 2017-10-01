import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { observer } from "mobx-react";
import { Link } from 'react-router-native'

export default observer(class MyFooter extends Component {
render() {
  return (
    <Footer>
      <FooterTab>
      <Link to="/x">
      <Button onPress={()=> console.log("it worked")}>
        <Icon name="apps" />
      </Button>
        </Link>
        <Button>
          <Icon name="camera" />
        </Button>
        <Button active>
          <Icon active name="navigate" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
  }
  })
