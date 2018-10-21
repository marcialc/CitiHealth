import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return(
      <View style = {styles.container}>
        <Text > Fix you're settings </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
})
