import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: "bold"
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 0,
  },
});




const Row = (props) => (

  <View style={styles.container}>

    <Image source={{ uri: props.image}} style={styles.photo}
     onError={(a) => {this.setState({image: require('../img/mipmap-hdpi/ic_launcher.png')
                                                                             });
                                                                         }} />
    <Text style={styles.item}  >
      {` ${props.title}`}
    </Text>
  </View>
);

export default Row;