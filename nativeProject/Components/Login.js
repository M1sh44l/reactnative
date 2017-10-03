import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import auth from './Auth';
import store from './Store'

export default observer(class MyLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleSignup(){
    console.log(this.state.username)
    console.log(this.state.password)
  }
  ButtonPress(e) {
    auth.login(this.state.username, this.state.password)
  }
  LogoutPress(e) {
    auth.logout(this.state.username, this.state.password)
  }


  render() {
    return (
      <Container>
        <Content>
          <Form>
          <Text>{store.username}</Text>
            <Item>
              <Input autoCapitalize="none" placeholder="Username" onChangeText={(username) => this.setState({username:username}) } />
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password: password}) } />
            </Item>
            <Button onPress={this.ButtonPress.bind(this)} light><Text>Login</Text></Button>
            <Button onPress={this.LogoutPress.bind(this)} light><Text>Logout</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
})
