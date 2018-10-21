import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
        <ImageBackground source={require('../assets/images/gradient_blue.png')} style={styles.background}>
        <View style={styles.container}>
          <TextInput></TextInput>
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: 'transparent',
  },


  background: {
    width: '100%',
    height: null,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  contentContainer: {
    alignItems: 'center',
  },
});
