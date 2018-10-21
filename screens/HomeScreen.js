import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, ImageBackground,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
   super(props);

   this.state = {
     percentage: 0,
     progress: 0,
     indeterminate: true,
     setColor: 'green',
     balance: '250,000.00',
     transactions: [],
   };
  }

  componentDidMount() {
    this.animate();
    fetch('https://citi-health-back.herokuapp.com/transactions')
      .then((response) => response.json())
      .then((responseJson) => {
        for (let i = 0; i < responseJson.creditCardAccountTransactions.length; i++) {
          console.log(responseJson.creditCardAccountTransactions[i])
          this.setState({transactions: [...this.state.transactions, responseJson.creditCardAccountTransactions[i]]})
        }
      })
      .catch((error) => {
        console.error(error);
      });
    for (let i = 0; i < this.state.transactions; i++) {
      console.log(this.state.transactions[i]);
    }
  }

  animate() {
    let progress = 0;
    let percentage = 0.6;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += 1;
        if (progress > percentage) {
          progress = percentage;
        }

        this.setState({ progress });
      }, 500);
    }, percentage * 1000);
  }


  render() {
    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.contentContainer}>
          <ImageBackground source={require('../assets/images/gradient_blue.png')} style={styles.background}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> DASHBOARD </Text>
            </View>
            <View style={styles.wrap}>
              <Text style={styles.progressText}> Balance </Text>
              <View styles = {styles.balance}>
                <Text style = {{fontSize: 40}}> {this.state.balance} $ </Text>
              </View>
            </View>
            <View style = {styles.progress}>
              <Text style={styles.progressText}> Health 💰 </Text>
              <Progress.Bar
                progress={this.state.progress}
                indeterminate={this.state.indeterminate}
                width={340}
                height={18}
                borderRadius={8}
                borderWidth={2}
                color={this.state.setColor}
                animationType={'timing'}
                />
            </View>
            <View> <Text style={styles.transTitle}> RECENT TRANSACTIONS </Text> </View>
            <View style = {styles.transactions}>
              {this.state.transactions.map((transaction) => {
                return <Text style={styles.transactionsText}>{transaction.transactionDescription} - ${transaction.transactionAmount}</Text>
              })}
            </View>
            <View style={{paddingBottom:160}}></View>
            </ImageBackground>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  background: {
    width: '100%',
    height: null,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },

  mainContainer: {
    marginTop: 20,
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
    color: 'rgba(96,100,109, 10)',
    lineHeight: 40,
    textAlign: 'center',
  },

  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },

  wrap: {
    paddingTop: 40,
    alignItems: 'center',
  },

  balance: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'black',
  },

  progressText: {
    paddingBottom: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },

  progress: {
    paddingTop: 30,
    alignItems: 'center',
  },

  transactions: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    width: '85%',
    borderColor: '#00004c',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  transactionsText:{
    fontSize: 11,
    paddingVertical: 10,

  },

  transTitle: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: '400',
  }
});
