import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View ,ToolbarAndroid,StyleSheet,ScrollView, Image} from 'react-native';
import Row from './Components/Row'
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://192.168.2.5:8000/api/main')
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



        <ListView
               style={styles.container}
               dataSource={this.state.dataSource}
               renderRow={(data) => <Row {...data} />}
               renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}

             />



      </View>
    );
  }
}



const styles = StyleSheet.create({
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
  separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },

});

