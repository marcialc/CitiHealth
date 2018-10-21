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
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> Username: </Text>
            <Text style={{fontSize: 20, paddingLeft: 10,}}>MarcialC</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> Password: </Text>
            <Text style={{fontSize: 20, paddingLeft: 12,}}>*********</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> Birthday: </Text>
            <Text style={{fontSize: 20, paddingLeft: 20,}}>06/26/1995</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> Career: </Text>
            <Text style={{fontSize: 20, paddingLeft: 30,}}>Computer Science Student</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> University: </Text>
            <Text style={{fontSize: 20, paddingLeft: 11,}}>Florida International University</Text>
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
    paddingBottom: 25,
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'center',
  },

  info:{
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  key: {
    color: 'gray',
    fontSize: 15,
    paddingLeft: 10,
  },

});
