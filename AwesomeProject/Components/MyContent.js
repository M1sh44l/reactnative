import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { observer } from "mobx-react";
import MyButton from './MyButton';
import MyNewList from './MyNewList';
import MyUsersList from './MyUsersList';
import Signup from './Signup';
import MyLogin from './MyLogin';
import {View} from 'react-native';
import { NativeRouter,Route , Link } from 'react-router-native'


export default observer(class MyContent extends Component {
  constructor(props) {
  super(props);
  this.state = {
    button1: false,
    button2: false,
    button3: false,
    button4: false,
  };
  }
  ButtonActive(){
    this.setState({
      button1: false,
      button2: false,
      button3: false,
      button4: false,
    })
  }
  render() {
  return (
    <NativeRouter>
    <Container>
      <Content>
          <Route path="/x" component={MyButton} />
          <Route path="/y" component={MyNewList} />
          <Route path="/z" render={() => <MyUsersList store={this.props.store} />} />
          <Route path="/c" render={() => <MyLogin store={this.props.store} />} />
      </Content>
      <Footer>
        <FooterTab>
        {this.state.button1 ? <Button active><Link to="/x"><View><Icon name="apps"/></View></Link></Button>:<Button><Link to="/x"><View><Icon name="apps" /></View></Link></Button>}
        {this.state.button2 ? <Button active><Link to="/y"><View><Icon name="camera"/></View></Link></Button>:<Button><Link to="/y"><View><Icon name="camera" /></View></Link></Button>}
        {this.state.button3 ? <Button active><Link to="/z"><View><Icon name="navigate"/></View></Link></Button>:<Button><Link to="/z"><View><Icon name="navigate" /></View></Link></Button>}
        {this.state.button4 ? <Button active><Link to="/c"><View><Icon name="person"/></View></Link></Button>:<Button><Link to="/c"><View><Icon name="person" /></View></Link></Button>}

        </FooterTab>
      </Footer>
      </Container>
      </NativeRouter>

  );
}
})
