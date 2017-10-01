import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ListView } from 'react-native';
import {observer} from 'mobx-react';


export default observer(class MyUsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://jsonplaceholder.typicode.com/users",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      })
    }
  }
  componentWillMount(){
    if(!this.props.store.loaded){
    this.fetchData();
    } else {
      this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.store.dataSource)})
    }
  }
  fetchData(){
    fetch(this.state.url)
    .then((x) => x.json())
    .then((y) => {
      console.log(y)
      this.setState({dataSource: this.state.dataSource.cloneWithRows(y)});
      this.props.store.dataSource = y;
      this.props.store.loaded = true;
    })
    .catch((error) => console.log(error)).done();
  }
  renderItem(object){
    return (
      <ListItem>
        <Text>Latitude: </Text>
        <Text>{object.address.geo.lat}</Text>
        <Text>, Longitude: </Text>
        <Text>{object.address.geo.lng}</Text>
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
})
