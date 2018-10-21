import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'PROFILE',
  };

  render() {
    return (
      <View style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={require('../assets/images/gradient_blue.png')} style={styles.background}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}> MARCIAL CABRERA </Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.email}> marcialandres@me.com </Text>
            <Text style={styles.username}> UserName: MarcialC</Text>
          </View>
          <View style={{paddingTop: 20}} />
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  background: {
    width: '100%',
    height: '100%',
    width: '100%',
    flex: 1,
  },

  mainContainer: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },

  contentContainer: {
    alignItems: 'center',
  },

  getStartedText: {
    paddingTop: 30,
    fontSize: 35,
    width: '100%',
    color: '#722f37',
    fontWeight: '300',
    textAlign: 'center',
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  wrap: {
    paddingTop: 10,
  },

  email: {
    paddingBottom: 15,
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
  },

  username: {
    paddingTop: 5,
    fontSize: 25,
    textAlign: 'left',
    paddingLeft: 10,
  }

});
