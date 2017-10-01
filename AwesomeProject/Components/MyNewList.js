import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ListView } from 'react-native';

export default class MyNewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://jsonplaceholder.typicode.com/todos",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      })
    }
  }
  componentWillMount(){
    this.fetchData();
  }
  fetchData(){
    fetch(this.state.url)
    .then((x) => x.json())
    .then((y) => {
      console.log(y)
      this.setState({dataSource: this.state.dataSource.cloneWithRows(y)})
    })
    .catch((error) => console.log(error)).done();
  }
  renderItem(object){
    return (
      <ListItem>
        <Text>{object.title}</Text>
      </ListItem>
    )
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem}
            />
          </List>
        </Content>
      </Container>
    );
  }
}
