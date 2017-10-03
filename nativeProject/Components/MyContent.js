import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon, Header, Left, Right, Title, Body, Footer, FooterTab, Button } from 'native-base';
import {observer} from 'mobx-react';
import { NativeRouter, Route , Link } from 'react-router-native';
import MyButton from './MyButton';
import CardList from './CardList';
import Events from './Events';
import store from './Store';
import Auth from './Auth';
import Login from './Login';
import MyHeader from './MyHeader';

export default observer(class MyContent extends Component {
  render() {
    return (
      <NativeRouter>
        <Container>
            <MyHeader />
          <Content>
            <Route path="/a" component={MyButton} />
            <Route path="/b" component={CardList} />
            <Route path="/c" component={Events} />
            <Route path="/d" render={() => <Login store={this.props.store} />} />
          </Content>
          <Footer>
            <FooterTab>
              <Button><Link to="/a"><View><Icon name="apps"/></View></Link></Button>
              <Button><Link to="/b"><View><Icon name="logo-googleplus"/></View></Link></Button>
              <Button><Link to="/c"><View><Icon name="logo-facebook"/></View></Link></Button>
              <Button><Link to="/d"><View><Icon name="logo-apple"/></View></Link></Button>
            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>
    );
  }
})
