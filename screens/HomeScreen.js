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
import { WebBrowser } from 'expo';
import * as Progress from 'react-native-progress';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> DASHBOARD </Text>
            </View>
            <View>
            <Text style = {styles.balance}> 150.00 $ </Text>
            </View>
            <View style = {styles.progress}>
              <Progress.Circle size={100} progress={0.5} borderWidth={2}/>
            </View>
        </ScrollView>
      </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );
  //
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };
  //
  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainer: {
    paddingTop: 30,
  },

  getStartedText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 10)',
    lineHeight: 25,
    textAlign: 'center',
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  balance: {
    textAlign: 'center',
    left: 100,
    top: 100,
    width: '50%',
    height: 45,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000099',
    borderBottomColor: '#00004c',
    color: 'black',
    fontSize: 30,
  },

  progress: {
    alignItems: 'center',
    top: 200,
  },
  // welcomeContainer: {
  //   alignItems: 'center',
  //   marginTop: 10,
  //   marginBottom: 20,
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: 'contain',
  //   marginTop: 3,
  //   marginLeft: -10,
  // },

  // homeScreenFilename: {
  //   marginVertical: 7,
  // },
  // codeHighlightText: {
  //   color: 'rgba(96,100,109, 0.8)',
  // },

  // codeHighlightContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.05)',
  //   borderRadius: 3,
  //   paddingHorizontal: 4,
  // },

  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: 'rgba(96,100,109, 1)',
  //   textAlign: 'center',
  // },
  // navigationFilename: {
  //   marginTop: 5,
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  // helpLink: {
  //   paddingVertical: 15,
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: '#2e78b7',
  // },
});
