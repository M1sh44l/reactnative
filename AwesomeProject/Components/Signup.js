import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';
import auth from './auth';
import store from './Store';


export default observer(class Signup extends Component {
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
    auth.signup(this.state.username, this.state.password)
  }
  componentWillMount(){
    auth.firstLoad();
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
          <Text>{this.props.store.username}</Text>
            <Item>
              <Input autoCapitalize="none" placeholder="Username" onChangeText={(username) => this.setState({username}) } />
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password}) } />
            </Item>
            <Button onPress={this.ButtonPress.bind(this)}><Text>Sign Up</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
})
