import React, { Component } from 'react';
import { ActivityIndicator, AppRegistry, StyleSheet, FlatList, Text, View, Alert} from 'react-native';
import Row from './Components/Row'
export default class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = { FlatListItems: [
      {key: 'Next stop $10,000? Bitcoin\'s incredible surge'},
      {key: 'The CNN news quiz: What do you remember from the week that was?'},
      {key: 'Three'},
      {key: 'Four'},
      {key: 'Five'},
      {key: 'Six'},
      {key: 'Seven'},
      {key: 'Eight'},
      {key: 'Nine'},
      {key: 'Ten'},
      {key: 'Eleven'},
      {key: 'Twelve'}
    ]}
  }


    componentDidMount() {
      return fetch('http://52.14.113.12/api/main')
        .then((response) => response.json())
        .then((responseJson) => {
        console.log("Hi")
          let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson),
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }







FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem (item) {

  Alert.alert(item);

  }


  render() {
    return (

<View style={styles.MainContainer}>

       <FlatList

          data={ this.state.FlatListItems }

          ItemSeparatorComponent = {this.FlatListItemSeparator}

          renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
         />


</View>

    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10

},

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});