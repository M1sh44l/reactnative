import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView, Image } from 'react-native';
import { Container, Header, List, ListItem, Content } from 'native-base';
import {observer} from 'mobx-react';

export default observer(class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: "https://api.github.com/events",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 != row2,
      })
    }
  }
  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(this.state.url).then((x) => x.json()).then((y) => {
      console.log(y)
      this.setState({dataSource: this.state.dataSource.cloneWithRows(y)});
    })
    .catch((error) => console.log(error)).done();
  }
  renderItem(object){
    return (
      <ListItem>
        <Image source={{uri: object.actor.avatar_url}} style={{width: 300, height: 300, flex: 1}} />
      </ListItem>
    )
  }
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListView dataSource={this.state.dataSource} renderRow={this.renderItem} />
          </List>
        </Content>
      </Container>

    )
  }
})
