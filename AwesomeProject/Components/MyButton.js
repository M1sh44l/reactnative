import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Form, Item, Button, Icon, Title, Content, Text, Input } from 'native-base';
import {observer} from 'mobx-react';

export default observer(class MyButton extends Component {
  constructor(props){
    super(props);
    this.state = { text: '' }

  }

  ChangeName(){
    this.props.store.name =  this.state.text
  }
  render() {
    return (
      <Content>

      <Form>
        <Item>
          <Input placeholder="name" onChangeText={(text) => this.setState({ text: text})} />
        </Item>
        <Button onPress={this.ChangeName.bind(this)}>
          <Text>
            Submit
          </Text>
        </Button>
      </Form>
      </Content>
    );
  }
})
