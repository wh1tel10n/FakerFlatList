import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import randomUsers from './components/Util'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isrefreshing: false,
      data : [],
    };
  }

  componentDidMount(){
    this.setState({
      ...this.state.state,
      data: randomUsers(20) //20명씩만 뿌려주겠다.
    })
  }

  _onEndReached = ()=> { //다음 리스트가 있는 것처럼 보여주고 데이터를 받아오는 함수를 호출하는 함수
    this.setState(state => ({
      data:[
        ...state.data,
        ...randomUsers(10),
      ]
    }));
  }

  _onrefresh = () => { //refresh하면 20명씩 가져온다.
    this.setState({
      data: randomUsers(20)
    })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem = {
            ({item}) => {
              return (
                <ListItem
                  roundAvatar
                  leftAvatar={{ source: { uri: item.avatar }}}
                  title = {item.name}
                  subtitle = {item.phoneNumber}
                />
              )
            }
          }

          initialNumToRender = {20}
          onEndReached = {this._onEndReached}
          refreshing = {this.state.isrefreshing}
          onRefresh = {this._onrefresh}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 5,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
