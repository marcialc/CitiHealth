import React from 'react';
import { Button } from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, ImageBackground,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'SETTINGS',
  };

  render() {
    return(
      <View style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={require('../assets/images/gradient_blue.png')} style={styles.background}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.Title}> HackGT 5: </Text>
          <Text style={styles.subTitle}>Dare to Venture</Text>
          </View>
          <View style={styles.wrap}>
            <Text style={styles.season}> Fall 2018 </Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.key}> Team-members: </Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.name}>Marcial Cabrera: </Text>
            <Text style={{fontSize: 20, paddingLeft: 12,}}>Peruvian, enjoyed working with React Native</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.name}>Andres Salinas: </Text>
            <Text style={{fontSize: 20, paddingLeft: 12,}}>I like full-stack web mobile</Text>
          </View>
          <View style = {styles.info}>
            <Text style={styles.name}>Gabriel Fajardo: </Text>
            <Text style={{fontSize: 20, paddingLeft: 12, textAlign: 'center'}}>From costa rica like to listen to rock music</Text>
            <Text style={{fontSize: 20, paddingLeft: 12, textAlign: 'center'}}>Like web-developing</Text>
          </View>
          <View style={{paddingTop: 20}} />
          </ImageBackground>
        </View>
    )
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

  Title: {
    paddingTop: 30,
    fontSize: 35,
    width: '100%',
    color: '#722f37',
    fontWeight: '300',
    textAlign: 'center',
  },

  subTitle: {
    paddingTop: 10,
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

  season: {
    paddingBottom: 25,
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
  },

  info:{
    paddingVertical: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },

  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: '500',
  },
})
