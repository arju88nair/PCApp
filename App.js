import React, { Component } from 'react';
import { ActivityIndicator, ToolbarAndroid, Image,AppRegistry, StyleSheet, FlatList, Text, View, Alert} from 'react-native';
import Row from './Components/Row'
export default class Movies extends Component {


constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }



  componentDidMount() {
      return fetch('http://52.14.113.12/api/main')
        .then((response) => response.json())
        .then((responseJson) => {
                  console.warn(responseJson)

          // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // do something with new state
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }


 GetItem (item) {

  Alert.alert(item);

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
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.containerToolbar}>

                <ToolbarAndroid style={styles.toolbar}
                                logo={require('./img/mipmap-hdpi/ic_launcher.png')}
                                onIconClicked={navigator.pop}
                                title=""
                                titleColor={'#ffffff'}/>

        <FlatList

                  data={ this.state.dataSource }

                  ItemSeparatorComponent = {this.FlatListItemSeparator}

                  renderItem={(data) => <Row {...data} />}
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
  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#000000',
    height: 56,
    alignItems:'baseline',
    textAlign: 'center',
    borderColor:"#000000"
  },
  logo:
  {
  backgroundColor: "#e9eaed",
  opacity:0.5
  },

  container: {
    flex: 1,
    marginTop: 20,
  },
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});

